# Architecture Decision Records (ADR)

## ADR-001: Pemilihan Astro.js (SSG) & Tailwind CSS sebagai Core Stack

- **Status:** Approved & Implemented
    
- **Date:** 2026-08-14
    
- **Konteks:** Website Sistem Informasi Pengmas FTI Banyubiru memerlukan performa tinggi, keterbacaan artikel berbasis Markdown yang rapi, waktu muat instan di jaringan seluler warga desa, serta kesiapan menampung lonjakan ribuan pengunjung secara bersamaan saat pameran Expo.
    
- **Keputusan:** Menggunakan **Astro.js (Mode Static Site Generation / SSG)** dipadukan dengan **Tailwind CSS** dan alur kerja _Markdown-driven via Obsidian & OpenCode_.
    
- **Konsekuensi & Keuntungan:**
    
    1. _Zero JavaScript Baseline:_ Konten dirender menjadi HTML statis murni, menghasilkan skor Google Lighthouse 95-100.
        
    2. _Ultra-fast TTFB:_ Waktu muat halaman sangat cepat (< 50ms) dan hemat kuota bagi pengunjung yang menggunakan koneksi seluler.
        
    3. _High-Traffic Resilience:_ Distribusi otomatis melalui Global Edge CDN (Vercel/Cloudflare) memastikan sistem tidak akan pernah mengalami crash database atau server down.
        
    4. _DX (Developer Experience):_ Penulisan rekap kegiatan dan berita cukup dilakukan melalui file Markdown (`.md`) dengan validasi skema tipe Zod.
        

## ADR-002: Standarisasi 6 Grid Program Kerja Simetris (2x3)

- **Status:** Approved & Implemented
    
- **Date:** 2026-08-14
    
- **Konteks:** Katalog program kerja harus merepresentasikan kontribusi spesifik dari seluruh program studi di lingkungan Fakultas Teknologi Informasi (FTI) secara adil dan memiliki estetika visual yang seimbang.
    
- **Keputusan:** Menetapkan struktur grid simetris 2 baris x 3 kolom yang memuat 6 kartu individual untuk masing-masing program studi:
    
    1. **Teknik Mesin:** Instalasi Panel Surya Mandiri Energi
        
    2. **Teknik Sipil:** Pengecoran & Pembangunan Akses Jalan Desa
        
    3. **Teknik Elektro:** Instalasi Penerangan Jalan Pintar
        
    4. **Teknik Arsitektur:** Perancangan Maket Tata Ruang & Wisata Desa
        
    5. **Teknologi Pangan:** Inovasi & Nilai Tambah Olahan Pangan Lokal
        
    6. **Teknik Informatika:** Implementasi Solusi IoT & Digitalisasi UMKM
        
- **Konsekuensi & Keuntungan:** Tampilan kartu di halaman Beranda menjadi simetris sempurna di layar desktop/tablet dan bertumpuk rapi di layar ponsel tanpa ada ruang kosong (_layout gap_).
    

## ADR-003: Pipeline Optimasi Aset Gambar Otomatis (Astro Assets)

- **Status:** Approved & Implemented
    
- **Date:** 2026-08-14
    
- **Konteks:** Dokumentasi foto kegiatan lapangan dari mahasiswa memiliki ukuran file mentah yang besar (JPG/PNG), berisiko memperlambat loading website.
    
- **Keputusan:** Wajib menggunakan modul bawaan `astro:assets` (`<Image />`) untuk seluruh gambar lokal.
    
- **Konsekuensi & Keuntungan:** Gambar dikonversi otomatis saat proses build menjadi format modern **WebP/AVIF** dengan kompresi hingga 80% tanpa mengurangi ketajaman visual, serta otomatis menerapkan _lazy loading_.