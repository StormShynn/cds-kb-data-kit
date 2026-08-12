// auth.mjs — optional HTTP auth for the Streamable HTTP transport.
// Modes (any combination):
//   - CDS_KB_OAUTH_SECRET set → OAuth 2.1 Bearer JWT (self-issued, see oauth.mjs)
//   - CDS_KB_JWKS_URL set     → verify Bearer JWT via remote JWKS (jose)
//   - API_KEY set             → shared secret via Bearer header or ?api_key=
//   - neither                 → public (next)
//
// Order tried per request: API key (fastest) → OAuth JWT → JWKS JWT.

import { createRemoteJWKSet, jwtVerify } from 'jose';
import { oauthEnabled, oauthVerifier } from './oauth.mjs';

/**
 * @returns {'none'|'api_key'|'jwks'|'oauth'|...} — '+' joined when several modes are on.
 */
export function describeAuthMode() {
  const parts = [];
  if (oauthEnabled()) parts.push('oauth');
  if ((process.env.CDS_KB_JWKS_URL || '').trim()) parts.push('jwks');
  if ((process.env.API_KEY || '').trim()) parts.push('api_key');
  return parts.length ? parts.join('+') : 'none';
}

function apiKeyMatches(req, apiKey) {
  if (!apiKey) return false;
  const queryKey = req.query?.api_key;
  if (queryKey === apiKey) return true;
  const auth = req.headers?.authorization;
  if (auth) {
    const [scheme, token] = auth.split(' ');
    if (scheme === 'Bearer' && token === apiKey) return true;
  }
  return false;
}

/**
 * Express middleware factory. Async-aware (await JWT verify before next/401).
 * @returns {import('express').RequestHandler}
 */
export async function createAuthMiddleware() {
  const jwksUrl = (process.env.CDS_KB_JWKS_URL || '').trim();
  const apiKey = (process.env.API_KEY || '').trim();
  const issuer = (process.env.CDS_KB_JWT_ISSUER || '').trim() || undefined;
  const audience = (process.env.CDS_KB_JWT_AUDIENCE || '').trim() || undefined;
  const oauthOn = oauthEnabled();

  if (!jwksUrl && !apiKey && !oauthOn) {
    return (_req, _res, next) => next();
  }

  let jwks = null;
  if (jwksUrl) {
    jwks = createRemoteJWKSet(new URL(jwksUrl));
  }

  return async (req, res, next) => {
    try {
      // 1) API key (query or Bearer) — fastest path.
      if (apiKey && apiKeyMatches(req, apiKey)) return next();

      // 2) Bearer token → OAuth JWT, then JWKS JWT.
      const auth = req.headers?.authorization;
      if (auth) {
        const [scheme, token] = auth.split(' ');
        if (scheme === 'Bearer' && token && token !== apiKey) {
          if (oauthOn) {
            try {
              await oauthVerifier.verifyAccessToken(token);
              return next();
            } catch {
              /* not our token — fall through to JWKS */
            }
          }
          if (jwks) {
            const opts = {};
            if (issuer) opts.issuer = issuer;
            if (audience) opts.audience = audience;
            await jwtVerify(token, jwks, opts);
            return next();
          }
        }
      }

      // 3) Nothing matched — 401 unless the server is truly public.
      if (jwksUrl || apiKey || oauthOn) {
        return res.status(401).send('Unauthorized');
      }
      return next();
    } catch {
      return res.status(401).send('Unauthorized');
    }
  };
}
