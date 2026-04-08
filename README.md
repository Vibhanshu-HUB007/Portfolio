# 🚀 Vibhanshu Waghmare - AI Engineer Portfolio

Modern React portfolio with animated WebGL shader background.

## ✨ Features

- 🌊 Animated WebGL shader background
- ⚛️ React 18 + TypeScript
- 🎨 Tailwind CSS
- 📱 Fully responsive
- ⚡ Fast loading with Vite

## 🚀 Quick Deploy

```bash
# Clean gh-pages cache
rm -rf node_modules/.cache/gh-pages

# Force deploy
npx gh-pages -d dist -f
```

Or use the deployment script:

```bash
./deploy-react.sh
```

## 🌐 Configure GitHub Pages

After deployment:

1. Go to: https://github.com/Vibhanshu-HUB007/portfolio/settings/pages
2. Source: **gh-pages** branch
3. Folder: **/ (root)**
4. Click **Save**

**Live at:** https://Vibhanshu-HUB007.github.io/portfolio/

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/ui/   # UI components
│   │   └── shader-background.tsx
│   ├── App.tsx          # Main app
│   └── main.tsx         # Entry point
└── index.html           # HTML template
```

## 🎨 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- WebGL (for shader background)

## 📝 License

MIT
