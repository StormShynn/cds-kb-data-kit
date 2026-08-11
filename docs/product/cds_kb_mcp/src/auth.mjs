// auth.mjs — optional HTTP auth for SSE / Streamable HTTP transports.
// Modes:
//   - CDS_KB_JWKS_URL set → verify Bearer JWT via remote JWKS (jose);
//     API_KEY still accepted as query/header for bridges that cannot send JWT.
//   - only API_KEY → existing Bearer / ?api_key= behaviour.
//   - neither → next() (public).

import { createRemoteJWKSet, jwtVerify } from 'jose';

/**
 * @returns {'none'|'api_key'|'jwks'|'jwks+api_key'}
 */
export function describeAuthMode() {
  const jwks = !!(process.env.CDS_KB_JWKS_URL || '').trim();
  const apiKey = !!(process.env.API_KEY || '').trim();
  if (jwks && apiKey) return 'jwks+api_key';
  if (jwks) return 'jwks';
  if (apiKey) return 'api_key';
  return 'none';
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

  if (!jwksUrl && !apiKey) {
    return (_req, _res, next) => next();
  }

  let jwks = null;
  if (jwksUrl) {
    jwks = createRemoteJWKSet(new URL(jwksUrl));
  }

  return async (req, res, next) => {
    try {
      if (apiKey && apiKeyMatches(req, apiKey)) return next();

      if (jwks) {
        const auth = req.headers?.authorization;
        if (auth) {
          const [scheme, token] = auth.split(' ');
          if (scheme === 'Bearer' && token && token !== apiKey) {
            const opts = {};
            if (issuer) opts.issuer = issuer;
            if (audience) opts.audience = audience;
            await jwtVerify(token, jwks, opts);
            return next();
          }
        }
      }

      // API_KEY-only mode (or JWKS failed / missing Bearer)
      if (!jwks && apiKey) {
        return res.status(401).send('Unauthorized');
      }
      if (jwks) {
        return res.status(401).send('Unauthorized');
      }
      return next();
    } catch {
      return res.status(401).send('Unauthorized');
    }
  };
}
