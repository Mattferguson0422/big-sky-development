# Big Sky Development Website

## Stack
- Next.js 15 (App Router) + TypeScript
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
- Target: Cloudflare Pages
- Domain: bigskydevelopment.us
