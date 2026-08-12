export default {
  async fetch(request, env) {
    // BACKEND_URL is a Worker environment variable, set via the Cloudflare
    // dashboard (Worker -> Settings -> Variables and Secrets) or
    // `wrangler secret put BACKEND_URL`. This is the ONLY thing that needs
    // updating when the BTP trial expires (~90 days) and cds-kb-mcp
    // redeploys to a new cfapps.*.hana.ondemand.com route — no code change,
    // no redeploy of this Worker needed. See ../mcp_btp_deployment_guide.md
    // section A.8, step 6.
    const backend = env.BACKEND_URL;
    if (!backend) {
      return new Response("BACKEND_URL is not configured on this Worker.", { status: 500 });
    }

    const incoming = new URL(request.url);
    const target = new URL(incoming.pathname + incoming.search, backend);

    // Forward method/headers/body as-is; strip Host so fetch() sets the
    // correct one for the backend instead of leaking the proxy's own domain.
    const headers = new Headers(request.headers);
    headers.delete("host");

    const init = {
      method: request.method,
      headers,
      redirect: "follow",
      // MCP responses are dynamic/session-bound — never let Cloudflare's
      // edge cache serve a stale one (observed CF-Cache-Status: HIT on a
      // plain GET during testing without this).
      cache: "no-store",
    };
    if (!["GET", "HEAD"].includes(request.method)) {
      init.body = request.body;
    }

    const resp = await fetch(target, init);

    // Pass the response straight through, including streaming bodies
    // (needed since the MCP endpoint responds over SSE/chunked transfer).
    const respHeaders = new Headers(resp.headers);
    respHeaders.set("Cache-Control", "no-store");
    return new Response(resp.body, {
      status: resp.status,
      statusText: resp.statusText,
      headers: respHeaders,
    });
  },
};
