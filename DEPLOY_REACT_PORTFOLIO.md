# 🚀 Deploy React Portfolio with ShaderBackground

## Quick Deploy (One Command)

```bash
./deploy-react.sh
```

This will:
- Install all dependencies
- Build your React app
- Deploy to GitHub Pages
- Push source code to main branch

---

## Manual Deployment (Step by Step)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Install gh-pages

```bash
npm install -D gh-pages
```

### Step 3: Build the Project

```bash
npm run build
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

### Step 5: Push Source Code

```bash
git add .
git commit -m "Deploy React portfolio"
git push origin main
```

---

## Configure GitHub Pages

1. Go to: https://github.com/Vibhanshu-HUB007/portfolio/settings/pages
2. Under "Source":
   - Branch: **gh-pages**
   - Folder: **/ (root)**
3. Click **Save**

⏱️ Wait 2-5 minutes

**Your portfolio will be live at:**
```
https://Vibhanshu-HUB007.github.io/portfolio/
```

---

## What You're Deploying

Your React portfolio includes:

✨ **ShaderBackground Component**
- Animated WebGL shader background
- Purple/blue gradient with flowing lines
- GPU-accelerated (60fps)
- Fully responsive

🎨 **Modern Tech Stack**
- React 18 + TypeScript
- Tailwind CSS
- Vite (fast build tool)
- shadcn/ui structure

📱 **Features**
- Fully responsive design
- Dark theme with teal accents
- Smooth animations
- Professional layout

---

## Test Locally First

Before deploying, test your portfolio locally:

```bash
# Start development server
npm run dev

# Visit: http://localhost:5173
```

Make sure everything looks good, then deploy!

---

## Update Your Portfolio Later

Whenever you make changes:

```bash
# Option 1: Use the script
./deploy-react.sh

# Option 2: Manual
npm run deploy
```

Changes will be live in 2-5 minutes!

---

## Project Structure

```
portfolio/
├── public/
│   ├── Profile_pic.png           # Your profile photo
│   └── Vibhanshu_Waghmare_Resume.pdf
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── shader-background.tsx  # WebGL shader
│   │       └── demo.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                    # Main app
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Tailwind styles
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.ts                 # Vite config (base: '/portfolio/')
└── tailwind.config.js             # Tailwind config
```

---

## Troubleshooting

### Issue: Build fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Deployment fails

```bash
# Check if gh-pages is installed
npm list gh-pages

# Reinstall if needed
npm install -D gh-pages

# Try deploying again
npm run deploy
```

### Issue: Assets not loading

Make sure assets are in `public/` folder:
- `public/Profile_pic.png`
- `public/Vibhanshu_Waghmare_Resume.pdf`

In your code, reference them as:
```tsx
<img src="/portfolio/Profile_pic.png" />
<a href="/portfolio/Vibhanshu_Waghmare_Resume.pdf">
```

### Issue: Blank page after deployment

Check browser console for errors. Common fixes:
- Verify `base: '/portfolio/'` in `vite.config.ts`
- Ensure GitHub Pages is set to `gh-pages` branch
- Clear browser cache (Ctrl + Shift + R)

### Issue: ShaderBackground not showing

- Check browser supports WebGL
- Open browser console for errors
- Ensure component is imported correctly

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Run linter
npm run lint
```

---

## Customize ShaderBackground

Edit `src/components/ui/shader-background.tsx`:

### Change Colors

```glsl
// Background gradient
vec4 bgColor1 = vec4(0.1, 0.1, 0.3, 1.0);  // Dark blue
vec4 bgColor2 = vec4(0.3, 0.1, 0.5, 1.0);  // Purple

// Line color
const vec4 lineColor = vec4(0.4, 0.2, 0.8, 1.0);
```

### Adjust Speed

```glsl
const float overallSpeed = 0.2;  // Increase for faster
```

### Change Line Density

```glsl
const int linesPerGroup = 16;  // More = denser
```

---

## Performance Tips

✅ **Already Optimized:**
- WebGL uses GPU acceleration
- Vite optimizes bundle size
- Code splitting enabled
- Assets are compressed

📊 **Check Performance:**
```bash
npm run build
ls -lh dist/
```

---

## Share Your Portfolio

Once deployed, share it:

**Your URL:**
```
https://Vibhanshu-HUB007.github.io/portfolio/
```

Add to:
- LinkedIn profile
- GitHub profile README
- Resume
- Email signature
- Social media

---

## Next Steps

1. **Deploy Now**: Run `./deploy-react.sh`
2. **Test**: Visit your live URL
3. **Share**: Add to LinkedIn and resume
4. **Update**: Keep adding new projects
5. **Monitor**: Add Google Analytics (optional)

---

## Quick Reference

```bash
# Deploy everything
./deploy-react.sh

# Or manually
npm install
npm run deploy

# Test locally
npm run dev

# Update later
npm run deploy
```

---

🎉 **Ready to deploy your React portfolio with the animated shader background!**

Run: `./deploy-react.sh`
