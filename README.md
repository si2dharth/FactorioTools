# Factorio Tools

Quality/Productivity Simulator - A Factorio-style simulation tool for calculating productivity and quality module effects.

## Deployment

### Cloudflare Pages

This project is configured for deployment on Cloudflare Pages.

#### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard > Pages](https://dash.cloudflare.com/pages)
3. Click "Connect to Git"
4. Select your repository (`FactorioTools`)
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `echo 'No build required'`
   - **Build output directory**: `.`
   - **Root Directory**: `factorio`
6. Click "Save and Deploy"

#### Option 2: CLI Deployment

1. Install Cloudflare Wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   wrangler pages deploy . --project-name=factorio-tools
   ```

### Manual Deployment

Simply upload the `qualitySimulator.html` file to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

## Local Development

Open `qualitySimulator.html` directly in your browser - no build step required.
