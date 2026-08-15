# Product Requirement Document (PRD)

**Project Name:** Portal Sistem Informasi & Rekap Pengabdian Masyarakat FTI Banyubiru

**Inisiator:** BEM Fakultas Teknologi Informasi (FTI) & 6 Himpunan Mahasiswa Program Studi

**Target Release:** 7 Hari (1 Minggu)

**Status:** Ready for Development (MVP Phase)

**Core Stack:** Astro.js (SSG) + Tailwind CSS + Astro Content Collections

## 1. Executive Summary & Problem Statement

Kecamatan Banyubiru, Kabupaten Semarang, merupakan wilayah potensial yang kaya akan hasil agraris, kawasan Rawa Pening, dan ragam produk UMKM lokal. Namun, transparansi publikasi potensi, integrasi data rekap pengabdian mahasiswa, dan diseminasi inovasi teknologi tepat guna sering kali belum terarsip secara digital dan minim aksesibilitas.

Sistem Informasi ini dibangun sebagai platform tunggal (_single source of truth_) yang ringan, modern bergaya SaaS, dan berkinerja tinggi guna:

1. Menampilkan profil terpadu inisiatif pengabdian dari 6 program studi FTI (Mesin, Sipil, Elektro, Arsitektur, Tek. Pangan, Informatika).
    
2. Menyajikan rekapitulasi kegiatan berkala dan dokumentasi lapangan.
    
3. Mengangkat komoditas ekonomi serta produk UMKM warga desa.
    
4. Menjadi pusat informasi terintegrasi menuju puncak Expo Gelar Karya.
    

## 2. User Personas

1. **Warga & Tokoh Masyarakat Banyubiru:**
    
    - _Tujuan:_ Memantau perkembangan pembangunan desa, melihat dampak nyata kontribusi mahasiswa, serta menyuarakan aspirasi lewat form kontak.
        
    - _Perangkat:_ Mayoritas mengakses via ponsel cerdas (_mobile network_).
        
2. **Mahasiswa, Dosen, & Civitas Akademika FTI:**
    
    - _Tujuan:_ Portofolio digital pengabdian, transparansi kerja lintas disiplin, dan rekam jejak akademis.
        
3. **Pengunjung Umum & Wisatawan:**
    
    - _Tujuan:_ Mencari data potensi wisata desa, produk olahan UMKM, serta jadwal pameran inovasi.
        

## 3. Information Architecture & Sitemap

- `/` (Beranda)
    
    - Hero Split Section (Visi, Teks Narasi, & 6 Bubble Prodi)
        
    - Kabar Pengabdian (SaaS Horizontal News Cards via Content Collections)
        
    - Timeline Pengabdian (4 Fase: Penerjunan -> Sosialisasi -> Eksekusi -> Expo)
        
    - Program Kerja Kami (Grid 6 Prodi Simetris: 2 Baris x 3 Kolom)
        
    - Statistik Dampak (Metrik Kunci: 6 Prodi, 14 Hari, 80+ Mahasiswa, 1 Expo)
        
    - Suara & Harapan Warga (Testimonial Kades, UMKM, Karang Taruna)
        
    - CTA Puncak Acara (Ajakan Hadir ke Expo Gelar Karya)
        
- `/tentang` (About)
    
    - Hero Storytelling Spasial
        
    - Bento Grid Lanskap Banyubiru (Geodata 22km & 4km, Rawa Pening, Potensi UMKM)
        
    - Tiga Jejak Kolaborasi (Pilar Pendekatan Multidisiplin)
        
    - Komponen Tim Pelaksana (Representasi 6 Himpunan & BEM)
        
    - CTA Portal Berita & Dokumentasi
        
- `/berita` (News / Blog)
    
    - Filter Kategori (Rekap Lapangan, Inovasi Pangan, IoT & Digital, Gelar Karya)
        
    - Grid List Artikel
        
    - `/berita/[slug]` (Detail Berita, Metadata, & Dokumentasi)
        
- `/kontak` (Contact / Aspirasi)
    
    - Form Aspirasi Warga & Peta Wilayah
        

## 4. Functional Requirements (FR)

- **FR-01 (Katalog 6 Prodi Simetris):** Menampilkan kartu individual untuk Teknik Mesin, Teknik Sipil, Teknik Elektro, Teknik Arsitektur, Teknologi Pangan, dan Teknik Informatika.
    
- **FR-02 (Astro Content Collections):** Menampilkan artikel berita dinamis yang di-generate otomatis dari file Markdown lokal (`src/content/berita/*.md`).
    
- **FR-03 (Automated Image Pipeline):** Gambar lokal diproses melalui `astro:assets` untuk dikonversi menjadi WebP/AVIF terkompresi dengan atribut responsive resolution.
    
- **FR-04 (SEO & OpenGraph Tags):** Konfigurasi meta tag dinamis, sitemap otomatis, dan preview tautan media sosial yang presisi.
    
- **FR-05 (Smooth Navigation):** Dukungan navigasi responsif, glassmorphism navbar, dan smooth scrolling antar-bagian.
    

## 5. Non-Functional Requirements (NFR)

- **Performance:** Skor Google Lighthouse > 95 (Zero-JS baseline untuk elemen konten statis).
    
- **Scalability & High Traffic:** Distribusi via Global Edge CDN (Vercel/Cloudflare Pages) guna menampung lonjakan ribuan pengunjung pameran Expo.
    
- **Responsiveness:** Desain adaptif penuh dari layar 320px hingga resolusi monitor ultra-wide.
    
- **Accessibility:** Standar kontras warna WCAG AA dengan tipografi Inter yang nyaman dibaca.