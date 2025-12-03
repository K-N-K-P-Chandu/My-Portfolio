# Portfolio Website - Naga Krishna Poorna Chandu Kovelamudi

A modern, responsive single-page portfolio website built with React, Tailwind CSS, and Framer Motion. Features cursor-driven parallax backgrounds, smooth animations, and a recruiter-focused design.

## 🚀 Features

- **Cursor-Driven Parallax**: Multi-layer background that responds to mouse movement with different depth factors
- **Responsive Design**: Fully responsive from 320px to 2560px+ screens
- **Smooth Animations**: Framer Motion powered entrance animations and micro-interactions
- **Accessible**: WCAG AA compliant with keyboard navigation, focus states, and screen reader support
- **Performance Optimized**: GPU-accelerated animations, lazy loading, and optimized bundle size
- **Working Contact Form**: Client-side validation with console logging (ready for email integration)
- **Resume Download**: One-click resume PDF download functionality
- **Modern UI**: Glass morphism, gradients, and tech-inspired design aesthetic

## 📋 Sections

1. **Hero** - Name, title, tagline, and primary CTAs
2. **About** - Professional summary and contact information
3. **Experience** - Work history with expandable modals for full details
4. **Certifications** - Professional certifications with credential links
5. **Skills** - Technical skills organized by category with interactive tabs
6. **Contact** - Modal form with validation and success/error states
7. **Footer** - Quick links, social media, and additional navigation

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm
- Git (optional)

### Local Development

1. **Navigate to the project directory:**
   ```powershell
   cd portfolio-app
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   - The app will be running at `http://localhost:5173`
   - The dev server supports hot module replacement (HMR)

### Build for Production

1. **Create production build:**
   ```powershell
   npm run build
   ```

2. **Preview production build locally:**
   ```powershell
   npm run preview
   ```

3. **Build output:**
   - Production files will be in the `dist/` folder
   - Ready to deploy to any static hosting service

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI (optional):**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy:**
   ```powershell
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. **Install Netlify CLI (optional):**
   ```powershell
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```powershell
   npm run build
   netlify deploy --prod --dir=dist
   ```

   Or drag and drop the `dist/` folder to Netlify's web interface.

### Deploy to GitHub Pages

1. **Install gh-pages:**
   ```powershell
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```powershell
   npm run deploy
   ```

## 📝 Customization

### Update Resume Content

All resume data is centralized in `src/data/resumeData.js`. Update this file to modify:

- Personal information (name, email, phone, social links)
- Professional summary
- Work experience
- Education
- Certifications
- Skills

### Replace Resume PDF

1. Place your resume PDF file in the `public/` folder
2. Name it `resume.pdf` (or update the path in `src/App.jsx`)
3. The download button will automatically use this file

### Update Colors & Theme

Edit `tailwind.config.js` to customize:

- Primary and secondary colors
- Dark theme colors
- Font families
- Animations and transitions

### Modify Parallax Intensity

Adjust parallax effect in `src/components/AnimatedBackground.jsx`:

```javascript
const layer1 = useParallax(20);  // Increase for more movement
const layer2 = useParallax(40);
const layer3 = useParallax(60);
```

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus States**: Clear visual focus indicators for keyboard users
- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **Color Contrast**: WCAG AA compliant color contrast ratios
- **Focus Trapping**: Modals trap focus for better keyboard navigation

### Disable Animations

Users with motion sensitivity will automatically see reduced animations. To manually disable:

Add to your OS/browser settings:
- **Windows**: Settings > Ease of Access > Display > Show animations
- **macOS**: System Preferences > Accessibility > Display > Reduce motion
- **Browser**: Most modern browsers respect the OS setting

## 📧 Contact Form Integration

The contact form currently logs submissions to the console. To integrate with a real email service:

### Option 1: EmailJS

```javascript
// In src/components/ContactModal.jsx
import emailjs from '@emailjs/browser';

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
  .then(() => setSubmitStatus('success'))
  .catch(() => setSubmitStatus('error'));
```

### Option 2: Formspree

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Option 3: Custom API

```javascript
fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 🔧 Troubleshooting

### Development server won't start

- Ensure Node.js 18+ is installed: `node --version`
- Delete `node_modules` and reinstall: `Remove-Item -Recurse -Force node_modules; npm install`
- Check for port conflicts (default: 5173)

### Build fails

- Clear cache: `Remove-Item -Recurse -Force node_modules .vite dist; npm install`
- Check for TypeScript errors (if using TS)
- Verify all dependencies are installed

### Parallax not working

- Check browser console for JavaScript errors
- Verify `prefers-reduced-motion` is not enabled
- Test in a different browser

### Resume download not working

- Ensure `resume.pdf` exists in the `public/` folder
- Check browser console for 404 errors
- Verify file path in `src/App.jsx`

## 📄 Project Structure

```
portfolio-app/
├── public/
│   └── resume.docx          # Resume file for download
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── Certifications.jsx
│   │   ├── ContactModal.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── resumeData.js    # All resume content
│   ├── hooks/
│   │   └── useParallax.js   # Custom hooks
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── index.html               # HTML entry point
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js
├── vite.config.js
├── README.md
└── QA_CHECKLIST.md
```

## 🎨 Design Notes

- **Color Palette**: Dark navy background with cyan (#00D9FF) and purple (#7B61FF) accents
- **Typography**: Inter for body text, JetBrains Mono for code/technical elements
- **Animations**: Entrance animations on scroll, hover effects, and cursor parallax
- **Glass Morphism**: Frosted glass effect on cards and navigation
- **Noise Texture**: Subtle noise overlay for depth

## 📊 Performance

Target metrics (actual scores may vary):

- **Lighthouse Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

Optimization techniques used:

- GPU-accelerated animations (transform/opacity only)
- Throttled mouse event handlers
- Lazy component rendering with Intersection Observer
- Optimized bundle size with tree shaking
- Minimal external dependencies

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Update `src/data/resumeData.js` with your information
3. Replace `public/resume.pdf` with your resume
4. Customize colors in `tailwind.config.js`
5. Deploy to your preferred hosting service

## 📜 License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio.

## 📞 Support

For questions or issues:

- **Email**: nagakrishna.c5@gmail.com
- **Phone**: +1 (312)-684-6425

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Heroicons
- Fonts from Google Fonts (Inter, JetBrains Mono)
- Built with React, Tailwind CSS, and Framer Motion

---

**Built with ❤️ by Naga Krishna Poorna Chandu Kovelamudi**
