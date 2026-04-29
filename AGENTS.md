# Portfolio Project — Handoff Instructions

## Project Overview
This is **Rahimanid Dian Purno's** premium portfolio website built with:
- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (using `@theme inline` syntax)
- **Framer Motion** for all animations
- **Lucide React** for icons (NOTE: `Github` and `Linkedin` icons do NOT exist — use `Code` and `Globe` instead)

## Tech Stack Details
- Entry point: `src/app/page.tsx`
- Layout: `src/app/layout.tsx` (Syne + DM Sans + Geist Mono fonts)
- Design system: `src/app/globals.css` (dark theme, `#050508` background, `#00d4ff` cyan accent)
- All components are in `src/components/`

## Current Status — WORKING & BUILDING CLEAN
The build passes with zero errors. Dev server runs at `localhost:3000`.

---

## Remaining Polish Tasks (Easy — Pick Any)

### 1. Add Smooth Page Transitions
- Wrap `page.tsx` children in `<AnimatePresence>` for smooth route transitions
- Low priority since it's a single-page app

### 2. Add a "Download Resume" Button
- In the Contact section or Navbar, add a button that links to `public/resume.pdf`
- Style it as a CTA with cyan glow: `px-6 py-3 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-sm`
- The user will need to add their actual PDF to `public/resume.pdf`

### 3. Replace Profile Placeholder with Real Photo
- In `About.tsx`, the avatar section currently shows a 👨‍💻 emoji
- Replace the inner content of the avatar `div` with: `<Image src="/photo.jpg" alt="Purno" fill className="object-cover" />`
- Import `Image` from `next/image`
- User needs to add their photo to `public/photo.jpg`

### 4. Add Open Graph Image
- Generate or place an OG image at `public/og.png` (1200x630px)
- Update `layout.tsx` metadata to include:
  ```tsx
  openGraph: {
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  }
  ```

### 5. Add Favicon
- Place favicon files in `public/` (`favicon.ico`, `apple-touch-icon.png`)
- Update `layout.tsx` with proper icon metadata

### 6. Performance: Lazy Load Heavy Components
- Wrap `CustomCursor` and `Hero`'s `ParticleCanvas` in `dynamic(() => import(...), { ssr: false })`
- This prevents hydration mismatches from canvas/mouse tracking

### 7. Add Loading State
- Create `src/app/loading.tsx` with a simple centered spinner using the accent color
- Example: a pulsing `Purno.` text with the accent dot

### 8. Accessibility Audit
- Add `aria-label` to all icon-only buttons
- Ensure color contrast meets WCAG AA for body text (`text-muted` #6b6b80 on #050508)
- Add `prefers-reduced-motion` media query to disable animations

---

## Rules for Editing

1. **Icons**: NEVER import `Github` or `Linkedin` from `lucide-react`. They don't exist. Use `Code` and `Globe`.
2. **Ease arrays**: Always cast as tuple: `ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]`
3. **CSS theme**: Use `@theme inline { }` syntax (Tailwind v4), NOT `@layer` or `tailwind.config.js`
4. **Dark mode**: The site is ALWAYS dark. Background is `#050508`. Never add light mode.
5. **Fonts**: Headings = `font-heading` (Syne), Body = `font-sans` (DM Sans), Code = `font-mono` (Geist Mono)
6. **Glass effect**: Use the `.glass` CSS class for glassmorphism cards
7. **Gradient borders**: Use the `.gradient-border` CSS class on hover-revealed borders
8. **Build check**: Always run `npx next build` after changes to verify zero errors

## File Structure
```
src/
├── app/
│   ├── globals.css      ← Design system, animations, utilities
│   ├── layout.tsx       ← Root layout, fonts, SEO metadata
│   └── page.tsx         ← Main page assembling all components
└── components/
    ├── CustomCursor.tsx  ← Spring-physics cursor with glow
    ├── Navbar.tsx        ← Glass navbar with scroll progress bar
    ├── Hero.tsx          ← Particle canvas, word reveal, orbiting dots
    ├── About.tsx         ← Stats bar, rotating avatar ring, facts card
    ├── Projects.tsx      ← Featured AURA card + 3-column grid
    ├── Skills.tsx        ← 5 categorized skill groups with glass cards
    ├── Journey.tsx       ← Scroll-driven timeline with glowing dots
    ├── Contact.tsx       ← 4-card contact grid with icon animations
    └── Footer.tsx        ← Minimal branded footer
```
