# System Architecture & Technical Specifications

## 1. Core Technology Stack

- **Framework:** Astro.js (v4.x / Static Site Generation Mode `output: 'static'`)
    
- **CSS Framework:** Tailwind CSS (v3.x / Utility-first)
    
- **Typography:** Google Fonts `Inter` (Variable Sans-serif)
    
- **Iconography:** Inline SVG Icons (Lucide / Heroicons style)
    
- **Image Pipeline:** Astro Asset Optimization (`astro:assets` -> WebP/AVIF converter)
    
- **Content Collections:** Astro Native Content Engine with Zod Schema Validation
    
- **Hosting & Edge CDN:** Vercel / Cloudflare Pages / Netlify
    

## 2. Directory Structure (`src/`)

Plaintext

```
banyubiru-sysinfo/
├── docs/                     # Dokumentasi arsitektur, PRD, & rules
├── public/                   # Favicon, robots.txt, sitemap.xml
├── src/
│   ├── assets/               # Gambar mentah lokal (JPG/PNG) untuk kompresi otomatis
│   │   ├── hero/             # Aset visual hero split
│   │   ├── proker/           # Foto dokumentasi 6 prodi
│   │   └── berita/           # Thumbnail artikel berita
│   ├── content/              # Astro Content Collections (Markdown/MDX)
│   │   ├── config.ts         # Definisi Zod schema
│   │   └── berita/           # File artikel *.md
│   │       ├── pengecoran-jalan-desa.md
│   │       ├── instalasi-penerangan-jalan.md
│   │       ├── pemanfaatan-panel-surya.md
│   │       ├── perancangan-maket-desa.md
│   │       ├── inovasi-olahan-pangan.md
│   │       └── implementasi-iot-umkm.md
│   ├── components/           # Komponen UI Modular (.astro)
│   │   ├── Navbar.astro      # Glassmorphism navigation bar
│   │   ├── Hero.astro        # Split hero with 6 prodi bubble pills
│   │   ├── NewsGrid.astro    # SaaS horizontal news cards
│   │   ├── Timeline.astro    # 4-Step pengmas timeline
│   │   ├── ProkerGrid.astro  # 6-Card symmetric prodi grid (2x3)
│   │   ├── Stats.astro       # High-contrast dark impact metrics
│   │   ├── BentoStory.astro  # Spatial storytelling & geodata
│   │   ├── Testimonials.astro# Testimoni warga & tokoh desa
│   │   └── Footer.astro      # Institutional footer & quick links
│   ├── layouts/              # Master layout wrapper
│   │   └── Layout.astro      # SEO head, fonts, open-graph, body slot
│   └── pages/                # File-based Routing
│       ├── index.astro       # Landing page utama
│       ├── tentang.astro     # Halaman About spasial
│       └── berita/
│           ├── index.astro   # Katalog rekap berita
│           └── [...slug].astro # Detail artikel dinamis
├── astro.config.mjs          # Konfigurasi Astro + Integrasi Tailwind
├── tailwind.config.mjs       # Konfigurasi Tema, Warna Brand, & Radius
├── tsconfig.json             # TypeScript compiler options
└── package.json
```

## 3. High-Traffic & Rendering Strategy

1. **Zero-JS Static Generation:** Seluruh halaman di-compile menjadi HTML/CSS murni saat build-time (`npm run build`). Tidak ada database overhead atau kalkulasi server saat diakses.
    
2. **Edge Network Distribution:** Seluruh aset di-cache pada Global Edge CDN (Vercel/Cloudflare). Waktu respons server (TTFB) tercapai < 50ms di jaringan seluler 4G/5G.
    
3. **Asset Hash Invalidation:** Aset gambar dan CSS diberi hash unik untuk immutable caching yang aman.