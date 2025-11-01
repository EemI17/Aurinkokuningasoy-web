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

**⚠️ Important:** Do NOT set `NPM_FLAGS=--production` or `npm_config_production=true` in Netlify environment variables. These flags omit devDependencies and will break Vite builds (vite: not found error).
# Deployment trigger
