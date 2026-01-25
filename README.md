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

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

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
