# QA Checklist & Acceptance Criteria

This document provides a comprehensive testing checklist to verify that all features and requirements are working correctly.

## ✅ Functional Requirements

### Navigation

- [ ] **Nav-1**: All navigation links in the header scroll smoothly to their target sections
- [ ] **Nav-2**: URL hash updates when clicking navigation links (e.g., `#about`, `#experience`)
- [ ] **Nav-3**: Active section is highlighted in the navigation menu
- [ ] **Nav-4**: Mobile hamburger menu opens and closes correctly
- [ ] **Nav-5**: Mobile menu closes when a navigation link is clicked
- [ ] **Nav-6**: Navigation becomes glass-morphic (frosted) on scroll
- [ ] **Nav-7**: Logo/brand button scrolls back to home/hero section

### Hero Section

- [ ] **Hero-1**: Name, title, and tagline display correctly from resume data
- [ ] **Hero-2**: "Get In Touch" button opens the contact modal
- [ ] **Hero-3**: "Download Resume" button downloads the resume file
- [ ] **Hero-4**: Social media icons (LinkedIn, GitHub, Email) link to correct URLs
- [ ] **Hero-5**: Scroll indicator animates and is visible
- [ ] **Hero-6**: All text is readable and properly formatted

### About Section

- [ ] **About-1**: Professional summary displays correctly from resume data
- [ ] **About-2**: Contact information (email, phone) is clickable and functional
- [ ] **About-3**: Stats cards (Years Experience, Cloud Platforms, etc.) display correctly
- [ ] **About-4**: Section animates into view when scrolling
- [ ] **About-5**: Profile placeholder/initials display correctly

### Experience Section

- [ ] **Exp-1**: All three work experiences display in chronological order
- [ ] **Exp-2**: Company name, position, location, and dates are correct
- [ ] **Exp-3**: Preview shows first 3 responsibilities
- [ ] **Exp-4**: Technology tags display (first 6 + count of remaining)
- [ ] **Exp-5**: "View Full Details" button opens modal
- [ ] **Exp-6**: Modal displays all responsibilities and technologies
- [ ] **Exp-7**: Modal close button (X) works
- [ ] **Exp-8**: Clicking outside modal closes it
- [ ] **Exp-9**: Pressing Escape key closes modal
- [ ] **Exp-10**: Focus is trapped within modal when open
- [ ] **Exp-11**: Keyboard navigation (Tab) works in modal
- [ ] **Exp-12**: Timeline connector displays between experience cards

### Certifications Section

- [ ] **Cert-1**: All 3 certifications display correctly
- [ ] **Cert-2**: Certification title, issuer, and date are correct
- [ ] **Cert-3**: Icons display for AWS and CompTIA certifications
- [ ] **Cert-4**: "View Credential" links are clickable
- [ ] **Cert-5**: Cards have hover effects (scale, shadow)
- [ ] **Cert-6**: Section animates into view when scrolling

### Skills Section

- [ ] **Skills-1**: All skill categories display as tabs
- [ ] **Skills-2**: Clicking a category tab switches the displayed skills
- [ ] **Skills-3**: Active tab is highlighted with gradient background
- [ ] **Skills-4**: All skills for selected category display as tags
- [ ] **Skills-5**: Skill tags have hover effects (glow, scale)
- [ ] **Skills-6**: Skill highlight cards (Cloud, AI/ML, Big Data) display
- [ ] **Skills-7**: Skills match the resume data exactly

### Contact Modal

- [ ] **Contact-1**: Modal opens when "Get In Touch" button is clicked
- [ ] **Contact-2**: Modal displays contact information (email, phone)
- [ ] **Contact-3**: Form has three fields: Name, Email, Message
- [ ] **Contact-4**: Name field validation: required, shows error if empty
- [ ] **Contact-5**: Email field validation: required, valid email format
- [ ] **Contact-6**: Message field validation: required, minimum 10 characters
- [ ] **Contact-7**: Error messages display below fields when validation fails
- [ ] **Contact-8**: Error messages clear when user starts typing
- [ ] **Contact-9**: Submit button is disabled while submitting
- [ ] **Contact-10**: Form submission logs to browser console
- [ ] **Contact-11**: Success toast displays after successful submission
- [ ] **Contact-12**: Form fields clear after successful submission
- [ ] **Contact-13**: Modal auto-closes 2 seconds after success
- [ ] **Contact-14**: Close button (X) works
- [ ] **Contact-15**: Clicking outside modal closes it
- [ ] **Contact-16**: Pressing Escape key closes modal
- [ ] **Contact-17**: Focus is trapped within modal when open
- [ ] **Contact-18**: First input field receives focus when modal opens

### Footer

- [ ] **Footer-1**: Brand/logo displays correctly
- [ ] **Footer-2**: Quick links scroll to correct sections
- [ ] **Footer-3**: "Contact" link in footer opens contact modal
- [ ] **Footer-4**: "Download Resume" link in footer downloads resume
- [ ] **Footer-5**: Email and phone links are clickable
- [ ] **Footer-6**: Social media icons link to correct URLs
- [ ] **Footer-7**: Copyright year is current year
- [ ] **Footer-8**: Technology stack mention is present

## 🎨 Visual & Animation Requirements

### Cursor-Driven Parallax

- [ ] **Parallax-1**: Background layers move when mouse moves (desktop)
- [ ] **Parallax-2**: Different layers move at different speeds (depth effect)
- [ ] **Parallax-3**: Movement is smooth and not janky
- [ ] **Parallax-4**: Parallax is disabled when `prefers-reduced-motion` is enabled
- [ ] **Parallax-5**: On mobile, parallax is disabled or has touch fallback
- [ ] **Parallax-6**: Background includes geometric shapes, gradients, and grid
- [ ] **Parallax-7**: Noise texture overlay is visible
- [ ] **Parallax-8**: Vignette effect darkens edges

### Animations

- [ ] **Anim-1**: Hero section elements animate in on page load
- [ ] **Anim-2**: Sections animate in when scrolling into view
- [ ] **Anim-3**: Navigation menu slides down on page load
- [ ] **Anim-4**: Mobile menu animates open/closed
- [ ] **Anim-5**: Buttons have hover effects (scale, shadow)
- [ ] **Anim-6**: Cards have hover effects (scale, glow)
- [ ] **Anim-7**: Skill tags animate in when category changes
- [ ] **Anim-8**: Scroll indicator bounces continuously
- [ ] **Anim-9**: Modals scale in/out when opening/closing
- [ ] **Anim-10**: All animations respect `prefers-reduced-motion`

### Design & Styling

- [ ] **Design-1**: Color scheme matches sample (dark navy, cyan, purple)
- [ ] **Design-2**: Glass morphism effect on cards and navigation
- [ ] **Design-3**: Gradient text on headings and accents
- [ ] **Design-4**: Typography is clear and readable (Inter font)
- [ ] **Design-5**: Proper spacing and white space
- [ ] **Design-6**: Consistent border radius on elements
- [ ] **Design-7**: Glow effects on primary elements
- [ ] **Design-8**: Custom scrollbar (cyan on dark background)

## 📱 Responsive Design

### Mobile (320px - 767px)

- [ ] **Mobile-1**: All content is readable without horizontal scroll
- [ ] **Mobile-2**: Navigation shows hamburger menu
- [ ] **Mobile-3**: Hero text sizes appropriately
- [ ] **Mobile-4**: Buttons are full-width or stack vertically
- [ ] **Mobile-5**: Experience cards stack vertically
- [ ] **Mobile-6**: Certifications grid shows 1 column
- [ ] **Mobile-7**: Skills tabs wrap to multiple rows
- [ ] **Mobile-8**: Footer sections stack vertically
- [ ] **Mobile-9**: Modal is scrollable and fits screen
- [ ] **Mobile-10**: Touch targets are at least 44x44px

### Tablet (768px - 1023px)

- [ ] **Tablet-1**: Navigation shows full menu
- [ ] **Tablet-2**: Hero layout is balanced
- [ ] **Tablet-3**: About section uses 2-column layout
- [ ] **Tablet-4**: Experience cards have proper spacing
- [ ] **Tablet-5**: Certifications grid shows 2 columns
- [ ] **Tablet-6**: Skills tabs display in single row
- [ ] **Tablet-7**: Footer uses 3-column layout

### Desktop (1024px+)

- [ ] **Desktop-1**: Max-width container centers content
- [ ] **Desktop-2**: All sections use optimal layout
- [ ] **Desktop-3**: Certifications grid shows 3 columns
- [ ] **Desktop-4**: Parallax effect is smooth and visible
- [ ] **Desktop-5**: Hover states work on all interactive elements
- [ ] **Desktop-6**: Content doesn't stretch too wide on large screens

## ♿ Accessibility

### Keyboard Navigation

- [ ] **A11y-1**: All interactive elements are keyboard accessible
- [ ] **A11y-2**: Tab order is logical and follows visual flow
- [ ] **A11y-3**: Focus states are clearly visible
- [ ] **A11y-4**: Modals trap focus when open
- [ ] **A11y-5**: Escape key closes modals
- [ ] **A11y-6**: Enter key activates buttons
- [ ] **A11y-7**: Skip to content link (if implemented)

### ARIA & Semantics

- [ ] **A11y-8**: Proper heading hierarchy (h1 → h2 → h3)
- [ ] **A11y-9**: ARIA labels on icon-only buttons
- [ ] **A11y-10**: ARIA-current on active navigation item
- [ ] **A11y-11**: ARIA-modal on modal dialogs
- [ ] **A11y-12**: ARIA-expanded on mobile menu button
- [ ] **A11y-13**: ARIA-invalid on form fields with errors
- [ ] **A11y-14**: Role="alert" on error messages
- [ ] **A11y-15**: Semantic HTML (nav, main, section, footer)

### Visual Accessibility

- [ ] **A11y-16**: Color contrast meets WCAG AA (4.5:1 for text)
- [ ] **A11y-17**: Focus indicators have sufficient contrast
- [ ] **A11y-18**: Text is resizable without breaking layout
- [ ] **A11y-19**: Content is readable with browser zoom at 200%
- [ ] **A11y-20**: Animations respect `prefers-reduced-motion`

## ⚡ Performance

### Loading & Runtime

- [ ] **Perf-1**: Initial page load is under 3 seconds (on 3G)
- [ ] **Perf-2**: No layout shift during page load (CLS < 0.1)
- [ ] **Perf-3**: Animations run at 60fps
- [ ] **Perf-4**: No janky scrolling
- [ ] **Perf-5**: Mouse movement handlers are throttled
- [ ] **Perf-6**: Images are optimized (if any)
- [ ] **Perf-7**: Fonts are preloaded or use font-display: swap

### Lighthouse Scores (Target)

- [ ] **Perf-8**: Performance score ≥ 90
- [ ] **Perf-9**: Accessibility score ≥ 95
- [ ] **Perf-10**: Best Practices score ≥ 95
- [ ] **Perf-11**: SEO score ≥ 95

### Bundle Size

- [ ] **Perf-12**: JavaScript bundle < 500KB (gzipped)
- [ ] **Perf-13**: CSS bundle < 50KB (gzipped)
- [ ] **Perf-14**: No unused dependencies

## 🔍 SEO & Meta

- [ ] **SEO-1**: Page title is descriptive and includes name
- [ ] **SEO-2**: Meta description is present and compelling
- [ ] **SEO-3**: Meta keywords are present
- [ ] **SEO-4**: Open Graph tags for social sharing
- [ ] **SEO-5**: Canonical URL is set (if applicable)
- [ ] **SEO-6**: Proper heading hierarchy
- [ ] **SEO-7**: Alt text on images (if any)

## 🌐 Browser Compatibility

Test in the following browsers:

- [ ] **Browser-1**: Chrome (latest)
- [ ] **Browser-2**: Firefox (latest)
- [ ] **Browser-3**: Safari (latest)
- [ ] **Browser-4**: Edge (latest)
- [ ] **Browser-5**: Mobile Safari (iOS)
- [ ] **Browser-6**: Chrome Mobile (Android)

## 🐛 Edge Cases & Error Handling

- [ ] **Edge-1**: Form handles empty submissions gracefully
- [ ] **Edge-2**: Long names/emails don't break layout
- [ ] **Edge-3**: Resume download works even if file is missing (shows error)
- [ ] **Edge-4**: External links open in new tab with rel="noopener noreferrer"
- [ ] **Edge-5**: Console has no errors or warnings
- [ ] **Edge-6**: Works with JavaScript disabled (graceful degradation)
- [ ] **Edge-7**: Works offline (if PWA features added)

## 📊 Data Accuracy

- [ ] **Data-1**: All resume data matches the provided resume document
- [ ] **Data-2**: No placeholder or dummy data remains
- [ ] **Data-3**: Contact information is correct and functional
- [ ] **Data-4**: Social media links point to correct profiles
- [ ] **Data-5**: Certification dates and issuers are accurate
- [ ] **Data-6**: Experience dates are in correct chronological order

## 🎯 Acceptance Criteria Summary

### Critical (Must Pass)

1. ✅ All navigation links scroll to target and update URL hash
2. ✅ Download Resume returns the attached resume file
3. ✅ Contact form validates, shows success toast, and logs to console
4. ✅ Cursor parallax moves on desktop and degrades gracefully on mobile
5. ✅ Experience cards show full content in accessible modal
6. ✅ Certifications grid lists items from resume
7. ✅ Responsive on 320px, 768px, and 1440px breakpoints
8. ✅ Keyboard navigation works throughout

### Important (Should Pass)

9. ✅ Lighthouse Performance ≥ 90
10. ✅ Lighthouse Accessibility ≥ 95
11. ✅ All animations respect `prefers-reduced-motion`
12. ✅ No console errors or warnings
13. ✅ Works in all major browsers

### Nice to Have (Optional)

14. ⭕ PWA features (offline support, installable)
15. ⭕ Multi-language support
16. ⭕ Dark/light mode toggle
17. ⭕ Analytics integration

## 📝 Testing Instructions

### Manual Testing

1. **Desktop Testing**:
   - Open in Chrome DevTools
   - Test at 1920x1080, 1440x900, 1280x720
   - Move mouse around to test parallax
   - Click through all navigation and buttons
   - Fill and submit contact form

2. **Mobile Testing**:
   - Use Chrome DevTools device emulation
   - Test iPhone SE (375px), iPad (768px), iPhone 12 Pro (390px)
   - Test hamburger menu
   - Test touch interactions

3. **Accessibility Testing**:
   - Navigate entire site using only keyboard
   - Test with screen reader (NVDA, JAWS, or VoiceOver)
   - Enable `prefers-reduced-motion` and verify animations are reduced
   - Check color contrast with browser extension

4. **Performance Testing**:
   - Run Lighthouse audit in Chrome DevTools
   - Test on slow 3G network throttling
   - Check Network tab for bundle sizes

### Automated Testing (Optional)

```powershell
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Run tests
npm run test
```

## ✅ Sign-Off

- [ ] All critical acceptance criteria pass
- [ ] All important acceptance criteria pass
- [ ] Responsive design verified on all breakpoints
- [ ] Accessibility requirements met
- [ ] Performance targets achieved
- [ ] No blocking bugs or issues
- [ ] Ready for deployment

---

**Tested by**: _________________  
**Date**: _________________  
**Notes**: _________________
