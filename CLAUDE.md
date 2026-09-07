# Big Sky Development Website

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (postcss plugin, @theme directive for tokens)
- Resend for contact form emails

## Dev
- `npm run dev` — starts on localhost:3000
- `npm run build` — production build

## Structure
- Single-page site: all sections in `src/components/`
- One API route: `src/app/api/contact/route.ts`
- Assets in `public/images/`

## Deployment
- Hosted on Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`)
- Auto-deploys on push to `main` via Cloudflare Workers Builds
- Manual deploy with `npm run deploy`; local Cloudflare preview with `npm run preview`
- Domain: bigskydevelopment.us

## Cloudflare MCP tooling (installed 2026-08-21)
The `cloudflare@cloudflare` plugin is installed at user scope, so these MCP servers are available here without any per-project setup. Prefer them over dashboard instructions or guessing at `wrangler` invocations.

| Server | Use for |
|---|---|
| `plugin:cloudflare:cloudflare-docs` | Cloudflare docs lookup. No auth needed. |
| `plugin:cloudflare:cloudflare-api` | Zones, DNS records, Email Routing. Account-wide. |
| `plugin:cloudflare:cloudflare-bindings` | R2, D1, KV bindings |
| `plugin:cloudflare:cloudflare-builds` | Workers Builds status and history |
| `plugin:cloudflare:cloudflare-observability` | Worker logs and analytics |

Notes:
- All except `cloudflare-docs` need a one-time `claude mcp login plugin:cloudflare:<server>` from an **interactive** terminal. A non-interactive session cannot complete the OAuth flow, so ask Matt rather than trying.
- The plugin also adds skills including `wrangler`, `workers-best-practices`, and `cloudflare-email-service`.
- `wrangler` CLI auth expires separately and needs `npx wrangler login`, also interactive.
- `cloudflare-api` reaches the whole account, which includes this site's live production deployment. Confirm with Matt before mutating anything outside the project at hand.
