# Quick Start Guide

Get your portfolio running in 3 minutes! ⚡

## 🚀 Run Locally

```powershell
# 1. Navigate to project
cd portfolio-app

# 2. Install dependencies (if not already done)
npm install

# 3. Start development server
npm run dev
```

Your portfolio will open at **http://localhost:5173** 🎉

## 📝 Before You Deploy

### 1. Update Your Information

Edit `src/data/resumeData.js`:

```javascript
export const personalInfo = {
  name: "YOUR NAME",
  email: "your.email@example.com",
  phone: "+1 (XXX)-XXX-XXXX",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
};
```

### 2. Add Your Resume PDF

1. Convert your resume to PDF
2. Place it in `public/` folder as `resume.pdf`
3. Or update the path in `src/App.jsx`

### 3. Update Social Links

In `src/data/resumeData.js`, replace placeholder URLs with your actual:
- LinkedIn profile
- GitHub profile
- Any other social media

## 🌐 Deploy in 1 Minute

### Option 1: Vercel (Recommended)

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts, and you're live! 🚀

### Option 2: Netlify

1. Build the project:
   ```powershell
   npm run build
   ```

2. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

Done! ✅

## 🎨 Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#00D9FF',  // Change to your color
  },
  secondary: {
    DEFAULT: '#7B61FF',  // Change to your color
  },
}
```

## 📧 Enable Contact Form

See `README.md` for detailed integration with:
- EmailJS
- Formspree
- Custom API

## ❓ Troubleshooting

**Port already in use?**
- Vite will automatically use the next available port
- Or specify a port: `npm run dev -- --port 3000`

**Build fails?**
```powershell
# Clear everything and reinstall
Remove-Item -Recurse -Force node_modules, dist
npm install
npm run build
```

**Resume download not working?**
- Make sure `resume.pdf` exists in `public/` folder
- Check browser console for errors

## 📚 Full Documentation

- **README.md** - Complete documentation
- **QA_CHECKLIST.md** - Testing checklist
- **DELIVERY_SUMMARY.md** - Project overview

## 🎯 Next Steps

1. ✅ Run locally and test
2. ✅ Update your information
3. ✅ Add your resume PDF
4. ✅ Customize colors (optional)
5. ✅ Deploy to production
6. ✅ Share with recruiters!

---

**Need help?** Check the full README.md or contact: nagakrishna.c5@gmail.com
