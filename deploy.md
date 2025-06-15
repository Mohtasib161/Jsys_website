# Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment Options

### 1. Shared Hosting (Most Common)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder contents to your web server's root directory (usually `public_html` or `www`)

3. The `.htaccess` file is automatically included for Apache servers to handle client-side routing

### 2. Netlify

1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### 3. Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

### 4. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## Environment Variables

Create `.env.local` file with:
```
VITE_WEB3FORMS_API_KEY=your-api-key-here
VITE_SITE_URL=https://yourdomain.com
```

## Troubleshooting

- **Routing issues on shared hosting**: Ensure `.htaccess` is uploaded
- **Assets not loading**: Check that asset paths are relative
- **Contact form not working**: Verify Web3Forms API key is set

## Performance Tips

- Enable gzip compression on your server
- Set cache headers for static assets
- Use a CDN for faster global delivery