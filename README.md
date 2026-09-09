# Gary Lim — Portfolio

Rebuild of limgary.com as a static React site (Vite + React + TypeScript + Tailwind +
shadcn/ui) so it can be hosted for free, with no Framer subscription.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Content

All page copy is in `src/lib/data.ts` — edit that one file to update case studies,
experience, About copy, or contact links. No other file needs touching for text changes.

Each case study's real hero screenshot (pulled from your original site) lives in
`public/images/`, downsized and compressed for the web — self-hosted, so the site has zero
dependency on Framer's asset host. The smaller in-page gallery thumbnails (the extra shots
further down each case study, like "As-is user journey", "Northstar direction", etc.) are
still original CSS/SVG art (`CardArt` component) rather than the original screenshots — add
more images to `public/images/case-studies/` and pass them into the `<CardArt image={...} />`
calls in `src/pages/CaseStudy.tsx` if you want those swapped in too.

## Deploying for free

Any of these work — pick one:

### Vercel (recommended, easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo. Framework preset: Vite. No config needed
   (`vercel.json` already handles client-side routing).
3. Deploy. You get a `*.vercel.app` URL immediately.

### Netlify
1. Push to GitHub, or drag-and-drop the `dist/` folder after `npm run build` at
   app.netlify.com/drop.
2. Build command: `npm run build`, publish directory: `dist`. The `_redirects` file
   (already in `public/`) handles client-side routing.

### GitHub Pages (free, auto-deploys on every push)
This repo already includes `.github/workflows/deploy.yml`, which builds and publishes to
Pages automatically on every push to `main` — no manual build/upload step.

1. Create a new **empty** repo on GitHub (no README/license — you already have files).
2. From this folder:
   ```bash
   git init
   git add -A
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo → **Settings → Pages**, under "Build and deployment", set **Source** to
   **GitHub Actions** (it should auto-detect the workflow after your first push).
4. Push triggers the workflow automatically — check the **Actions** tab for progress. Once
   green, your site is live at `https://<your-username>.github.io/<repo-name>/`.
5. The included `public/404.html` fallback makes client-side routes (like
   `/case-studies/...`) work correctly on Pages' static hosting.

## Connecting your Namecheap domain

- **Vercel**: Project → Settings → Domains → add `limgary.com` (and `www`). Vercel shows the
  exact A/CNAME records to add — go to Namecheap → Domain List → Manage → Advanced DNS and
  add them there.
- **Netlify**: Site settings → Domain management → Add domain, then update Namecheap's DNS
  the same way with the records Netlify shows.
- **GitHub Pages**: a `public/CNAME` file containing `limgary.com` is already in this repo,
  so Pages will serve the custom domain once you add it in **Settings → Pages → Custom
  domain**. Then in Namecheap → Domain List → Manage → **Advanced DNS**, add:
  - Four `A` records, Host `@`, pointing at GitHub's Pages IPs:
    `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - A `CNAME` record, Host `www`, pointing at `<your-username>.github.io`
  - Remove any existing Namecheap "parked page" A/CNAME records for `@` and `www` first,
    so they don't conflict.
  - Back in GitHub's Pages settings, check **Enforce HTTPS** once DNS has propagated
    (GitHub issues the certificate automatically — can take a few minutes to a few hours).

Either way, DNS changes can take up to 24-48 hours to propagate.
