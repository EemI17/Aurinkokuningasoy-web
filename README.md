aurinkokuningas

## Build & Deploy

This project uses Vite for building and is deployed on Netlify.

**Requirements:**
- Node 20

**Build Commands:**
```bash
npm ci --include=dev
npm run build
```

**Output Directory:**
- `dist/`

**Netlify Configuration:**
- Build command: `npm ci --include=dev && npm run build`
- Publish directory: `dist`
- Node version: 20 (pinned in `netlify.toml` and `.nvmrc`)
