# Portal Sistem Informasi Pengmas FTI Banyubiru

Portal sistem informasi terpadu dan rekam jejak digital kegiatan pengabdian masyarakat Fakultas Teknologi Informasi (FTI) di Kecamatan Banyubiru, Kabupaten Semarang.

Didesain dengan pendekatan modern **SaaS Bento UI**, berkinerja tinggi (_Zero-JS by default_), dan ramah SEO menggunakan **Astro.js** dan **Tailwind CSS**.

## 🚀 Quick Start (Development)

Pastikan Node.js (v18+) sudah terinstal di komputer Anda.

Bash

```
# 1. Masuk ke direktori proyek
cd banyubiru-sysinfo

# 2. Install dependencies
npm install

# 3. Jalankan local development server
npm run dev

# 4. Akses melalui browser
# http://localhost:4321
```

## 🛠️ Build & Production

Bash

```
# Build static files ke folder dist/
npm run build

# Preview hasil build production secara lokal
npm run preview
```

## ⚡ Optimalisasi Kinerja & High Traffic

1. **Zero JavaScript Baseline:** Seluruh konten dirender menjadi HTML murni saat build-time.
    
2. **Astro Image Pipeline (`astro:assets`):** Gambar otomatis dikonversi ke WebP/AVIF dengan kompresi optimal dan _lazy loading_.
    
3. **Edge CDN Distribution:** Siap dideploy ke Vercel/Cloudflare Pages untuk melayani lonjakan pengunjung pameran Expo secara instan.
    

## 📖 Dokumentasi Lengkap

Seluruh blueprint proyek tersedia di folder `/docs`:

- `prd.md` : Spesifikasi kebutuhan produk & user persona.
    
- `architecture.md` : Arsitektur teknis, routing, dan direktori.
    
- `design.md` : Token desain warna Teal & tipografi Inter.
    
- `schema.md` : Skema koleksi berita & katalog proker.
    
- `rules.md` : Aturan teknis & batasan coding untuk AI Agent.
    
- `decision.md` : Architecture Decision Records (ADR).
    
- `status.md` : Roadmap pengerjaan 7 hari.
    
- `progress.md` : Log progres harian & blocker.