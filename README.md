# Alex Works

Landing page for [alexworks.app](https://alexworks.app). Static Astro site, deployed as Cloudflare assets.

```bash
npm install
npm run dev
npm run build
npm run deploy
```

Cloudflare Web Analytics stays off until `PUBLIC_CF_BEACON_TOKEN` is set. Copy `.env.example` to `.env` for local preview of the beacon.

Products live in `src/data/products.ts`. Adding one object is enough to publish another card.
