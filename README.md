# Portfolio Website

A modern portfolio website built with **TypeScript** and **React**, using Vite as the build tool.

## Language & Technology

- **TypeScript** - Type-safe JavaScript
- **React 19** - UI framework
- **Vite** - Build tool and dev server

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (local development):**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Deploying to Cloudflare Pages (production):**
   For the AI assistant to work on your live site (e.g. `aminjafari.me`), you must add the same key as a **build** environment variable:
   - Open [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → your project.
   - Go to **Settings** → **Environment variables**.
   - Add a variable:
     - **Name:** `GEMINI_API_KEY`
     - **Value:** your Gemini API key
     - **Environment:** Production (and optionally Preview).
   - Trigger a **new deploy** (e.g. push a commit or use “Retry deployment”). The key is only available during the build.

## Running the Application

**Start the development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Other Commands

- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Troubleshooting

### AI assistant: “Please verify the API Key” on production (Cloudflare Pages)

- The chatbot works locally but fails on the live site when `GEMINI_API_KEY` is not available during the **Cloudflare build**.
- **Fix:** Add `GEMINI_API_KEY` in Cloudflare Pages → **Settings** → **Environment variables** for **Production**, then **redeploy** (see step 3 above).
- If you use VPN/proxy, ensure it does not block Cloudflare build or Gemini API calls.

### npm install Permission Error (EACCES)

If you encounter permission errors during `npm install`, try one of these solutions:

**Option 1: Clear npm cache (Recommended)**
```bash
npm cache clean --force
npm install
```

**Option 2: Fix npm cache permissions**
```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

**Option 3: Use npm with --force flag (if cache is corrupted)**
```bash
npm install --force
```
