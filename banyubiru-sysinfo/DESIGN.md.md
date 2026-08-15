# Design System & UI Tokens

## 1. Design Archetype

**Modern SaaS Bento x Warm Eco-Impact:** Mengawinkan presisi antarmuka platform teknologi modern (_Bento Grid, subtle borders, pill badges, ambient blur, clean contrast_) dengan kehangatan kearifan lokal desa Banyubiru.

## 2. Color Palette (Tailwind Tokens)

JavaScript

```
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fdfa', // Background badge / highlight lembut
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e', // Primary Brand (Teal Khas FTI Banyubiru)
          800: '#115e59',
          900: '#134e4a', // Dark Accent
        },
        surface: {
          light: '#f8fafc', // Slate-50 (Neutral background selang-seling)
          white: '#ffffff', // Card background
          dark:  '#0f172a', // Slate-900 (Stats & dark CTA background)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}
```

## 3. Typography & Hierarchy

- **Font Family:** `'Inter', sans-serif`
    
- **Scale:**
    
    - H1: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight`
        
    - H2: `text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight`
        
    - H3: `text-xl font-bold text-slate-900`
        
    - Body Text: `text-base md:text-lg text-slate-600 leading-relaxed`
        
    - Microcopy / Tag: `text-xs font-bold tracking-widest uppercase`
        

## 4. UI Components Pattern

- **Card Bento Grid:** `rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300`
    
- **Badge Pill:** `inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-100`
    
- **CTA Button:** `px-8 py-4 rounded-full font-bold bg-brand-700 text-white hover:bg-brand-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all`
    
- **Proker Grid Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` (Wajib menampung 6 kartu prodi secara simetris 2 baris x 3 kolom).