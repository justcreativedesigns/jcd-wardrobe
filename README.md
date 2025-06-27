# Just Creative Designs - Interior Design Website

A high-performance landing page for Just Creative Designs, optimized for Google Ads campaigns.

## 🚀 Performance Optimizations

- **Lazy Loading**: Images and components load on-demand
- **Code Splitting**: Routes are loaded dynamically
- **Minimal Dependencies**: Removed 40+ unused UI components and packages
- **Optimized Build**: Terser minification with console removal
- **Asset Optimization**: Preconnect and preload for external resources

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds and HMR
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Minimal UI Components** (only essential ones)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/gangadhar02/jcd-blr.git

# Navigate to project directory
cd jcd-blr

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Minimal UI components (button, card, input, etc.)
│   ├── LazyImage.tsx # Optimized image loading
│   └── ...          # Business components
├── pages/
│   ├── Index.tsx    # Main landing page
│   └── NotFound.tsx # 404 page
└── App.tsx          # Main app with lazy routing
```

## ⚡ Performance Features

1. **Image Optimization**
   - Lazy loading with intersection observer
   - Preloading for next carousel images

2. **Bundle Optimization**
   - Vendor chunk splitting
   - Tree shaking enabled
   - Removed unused dependencies

3. **Network Optimization**
   - Preconnect to Google Fonts
   - DNS prefetch for third-party scripts
   - Font preloading

## 🎯 Deployment

Optimized for static hosting. The build output in `dist/` can be deployed to any static hosting service.

## 📝 License

Private repository for Just Creative Designs.