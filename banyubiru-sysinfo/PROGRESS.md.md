# Daily Progress & Activity Log

### [Day 1] - Inisialisasi & Arsitektur

- [x] Diskusi dan penetapan konsep UI: Modern SaaS Bento x Alam Banyubiru.
    
- [x] Evaluasi kendala WordPress dan eksekusi pivot ke Astro.js + Tailwind.
    
- [x] Pembuatan 9 dokumen acuan PRD, Architecture, Design Tokens, Schema, Rules, Status, dan ADR di Obsidian.
    
- [x] Verifikasi performa arsitektur statis untuk jaminan high-traffic (Zero-JS + Edge CDN).
    

### [Day 2] - Home Page: Hero Split & Bento Story ✅

- [x] Setup `src/layouts/Layout.astro` dengan konfigurasi Font Inter dan meta tag SEO.
    
- [x] Membangun komponen `Navbar.astro` (Glassmorphism effect).
    
- [x] Membangun `Hero.astro` split-screen dengan 6 bubble prodi dan gambar melayang.
    
- [x] Membangun `BentoStory.astro` untuk storytelling geospasial Banyubiru.

### [Day 3] - Home Page: Proker Grid & Timeline ✅

- [x] Membangun `Timeline.astro` dengan 4 kartu tahap SaaS (Penerjunan, Sosialisasi, Eksekusi, Gelar Karya).
    
- [x] Membangun `ProkerGrid.astro` grid simetris 2x3 (6 prodi) berbasis Content Collections (`src/content/proker/*.json`).
    
- [x] Membuat 6 data proker (Mesin, Sipil, Elektro, Arsitektur, Pangan, Informatika) dengan skema Zod tervalidasi.
    
- [x] Merancang SVG placeholder untuk hero, bento, dan 6 thumbnail prodi via pipeline `astro:assets`.
    
- [x] Menyusun `src/pages/index.astro`: Layout + Hero + BentoStory + Timeline + ProkerGrid.

### [Day 4] - Home Page: News, Stats, Testimoni, CTA & Footer ✅

- [x] Membangun `NewsGrid.astro` dengan 3 kartu berita SaaS dari Content Collections (`src/content/berita/*.md`).
    
- [x] Membuat 2 artikel berita baru (Inovasi Pangan, Digitalisasi & IoT) + 3 thumbnail SVG via `astro:assets`.
    
- [x] Membangun `Stats.astro` metrik dampak 4 kolom (`bg-slate-900`, angka `text-brand-500`).
    
- [x] Membangun `Testimonials.astro` 3 suara warga (Kades, UMKM, Karang Taruna) dengan kartu kutipan & avatar inisial.
    
- [x] Membangun `CTA.astro` puncak Expo Gelar Karya (`bg-brand-700`) dengan 2 tombol aksi.
    
- [x] Membangun `Footer.astro` institusional (`bg-slate-900`, rekap 6 prodi & navigasi cepat).
    
- [x] Menyusun urutan lengkap `src/pages/index.astro`: Hero → NewsGrid → Timeline → ProkerGrid → Stats → Testimonials → CTA → Footer.

### [Day 5] - Halaman About & Dummy Content Collections ✅

- [x] Membuat 3 artikel berita dummy (`pengecoran-jalan-vital`, `inovasi-olahan-pangan-lokal`, `digitalisasi-umkm-dan-iot`) valid 100% skema Zod.
    
- [x] Membuat 3 thumbnail SVG berita baru di `src/assets/berita/` via `astro:assets`.
    
- [x] `NewsGrid.astro` terhubung `getCollection('berita')` — menampilkan 3 berita dummy terbaru secara dinamis.
    
- [x] Membangun `AboutHero.astro` storytelling spasial split (narasi + visual komposisi).
    
- [x] Membangun `ThreePillars.astro` (3 pilar kolaborasi multidisiplin).
    
- [x] Membangun `TeamGrid.astro` (4 kartu representasi BEM & 6 himpunan prodi).
    
- [x] Membangun `src/pages/tentang.astro` (Layout + AboutHero + BentoStory + ThreePillars + TeamGrid + CTA + Footer).

### [⚡ Bonus] - Halaman UMKM, Kontak & Integrasi Maps ✅

- [x] Menambah koleksi `umkm` (skema Zod) + 6 data UMKM dummy realistis di `src/content/umkm/*.json`.
    
- [x] Membangun `UmkmCard.astro` (badge kategori, nama, pemilik, dusun, harga, tombol WhatsApp hijau cerah).
    
- [x] Membangun `src/pages/umkm.astro` — header "Sentra Kreasi & Ekonomi Warga", grid 6 UMKM, banner daftar UMKM.
    
- [x] Membangun `src/pages/kontak.astro` — info kontak, jam kerja, form aspirasi, embed Google Maps, quick info 22 km/4 km.
    
- [x] Sinkronisasi `Navbar.astro` & `Footer.astro`: link UMKM (`/umkm`) & Kontak (`/kontak`) + status aktif halaman.

### [⚡ Bonus] - Halaman Galeri & Dokumentasi Kegiatan ✅

- [x] Menambah koleksi `galeri` (skema Zod) + 6 item dokumentasi dummy di `src/content/galeri/*.json`.
    
- [x] Membangun `GalleryGrid.astro` layout masonry (CSS columns) dengan aspect dinamis 16:9 & 4:5.
    
- [x] Hover overlay gradient gelap (caption judul, tanggal, badge kategori) + efek zoom `scale-105`.
    
- [x] Membangun `src/pages/galeri.astro` — header "Lensa Pengabdian Banyubiru" + banner ajakan ke `/berita` & `/#proker`.
    
- [x] Sinkronisasi navigasi: link "Galeri" di `Navbar.astro` & `Footer.astro` → `/galeri` dengan status aktif.

### [⚡ Fitur Interaktif] - Countdown Expo Gelar Karya ✅

- [x] Membangun `Countdown.astro` — 4 kotak bento simetris (Hari : Jam : Menit : Detik) dengan angka besar putih di atas `bg-black/30 backdrop-blur-md`.
    
- [x] Script vanilla scoped (setInterval 1 detik) memperbarui DOM tanpa reload; menampilkan "🎉 Pameran Expo Sedang Berlangsung!" saat Hari H.
    
- [x] Target Expo: 25 Agustus 2026 pukul 09.00 WIB.
    
- [x] Integrasi `<Countdown />` di `CTA.astro` (di antara narasi dan tombol aksi) + sinkronisasi tanggal Expo.

### [⚡ Peningkatan UX & Visual] - View Transitions, Scroll-Reveal & Back-to-Top ✅

- [x] View Transitions aktif di `Layout.astro` via `<ClientRouter />` dari `astro:transitions` (Astro 7: `ViewTransitions` diganti `ClientRouter`).
    
- [x] Smooth scroll & polish global pada `<html>`: `scroll-smooth antialiased selection:bg-brand-500 selection:text-white`.
    
- [x] `BackToTop.astro` — tombol floating bulat `bottom-8 right-8` (brand-700, shadow-xl, hover lift); muncul saat `scrollY > 300`, klik → `scrollTo({ top: 0, behavior: 'smooth' })`.
    
- [x] Utility `.reveal-on-scroll` (opacity-0 → is-visible, translate-y, transition 700ms ease-out) + IntersectionObserver vanilla; skrip berbasis `astro:page-load` agar tetap jalan antar transisi.
    
- [x] Diterapkan pada kartu utama: `Hero`, `NewsGrid`, `ProkerGrid`, `BentoStory`, `GalleryGrid` (+ `prefers-reduced-motion` dihormati).
    
- [x] `BackToTop` dipasang di `Layout.astro` → aktif otomatis di seluruh halaman (`/`, `/tentang`, `/umkm`, `/kontak`, `/galeri`).
    
- [x] Build verified: 5 halaman, CSS reveal & JS observer ter-bundle/inline, meta `astro-view-transitions-enabled` ada.

### [⚡ Halaman Mandiri Program Kerja] - `/proker` & Detail 6 Prodi ✅

- [x] Migrasi koleksi `proker` dari JSON → **Markdown** (`src/content/proker/*.md`): 6 berkas (mesin-solar-cell, sipil-pengecoran-jalan, elektro-smart-pju, arsitektur-maket-desa, pangan-inovasi-wader, informatika-smart-umkm).

- [x] Skema Zod diperbarui: `prodi`, `title`, `kategori`, `ringkasan`, `status` (Selesai / Tahap Finalisasi), `lokasi`, `image` (`image()` helper → asset SVG dioptimasi), `targetLuaran` (array label+nilai), `leadProdi`, `tags`, `order`.

- [x] Halaman listing `/proker` (`proker/index.astro`): hero "Ragam Inovasi & Dedikasi 6 Program Studi", grid 6 kartu via `getCollection('proker')` (thumbnail, badge prodi, badge status, ringkasan, tombol "Lihat Detail Program Kerja →").

- [x] Halaman detail `/proker/[...slug].astro`: `getStaticPaths()` + render `<Content />`, dokumentasi foto, grid metrik `targetLuaran`, tombol "← Kembali ke Katalog Program Kerja", styling `.article-content` (tanpa plugin typography).

- [x] `ProkerCard.astro` (kartu bersama untuk listing & teaser) + Beranda jadi **teaser 4 kartu** dengan CTA "Lihat Seluruh Program Kerja 6 Prodi →".

- [x] Link diperbaiki: Navbar/Footer/Hero/galeri `/#proker` → `/proker`; state `active` menyala di `/proker` & `/proker/*`.

- [x] Build verified: **12 halaman** (5 lama + 1 listing + 6 detail), semua rute detail render konten & metrik.

### [⚡ Upgrade Sistem Informasi Proker] - Data Kaya & Detail Akuntabel ✅

- [x] Skema `proker` diperkaya: `prodi`, `kategori`, `lokasi`, `status`, `progressPercent` (0-100), `leadProdi`, `targetLuaran` (checklist string), `image` (string key), `featured`.

- [x] 6 berkas Markdown ditulis ulang dengan narasi lengkap: **Urgensi Masalah Desa → Solusi & Metode Rekayasa → Hasil Capaian Kuantitatif → Dampak Sosial**.

- [x] Detail `/proker/[...slug].astro`: layout 2 kolom + sidebar meta-card sticky (badge prodi/status, **progress bar %**, lokasi, penanggung jawab) + **checklist target luaran** (Output Kunci).

- [x] Konten utama pakai tipografi `prose lg:prose-lg prose-teal` via plugin **@tailwindcss/typography** (diinstall & diaktifkan di tailwind.config).

- [x] Tombol navigasi: "← Kembali ke Katalog Proker" & "Hubungi Penanggung Jawab via Aspirasi" (→ `/kontak`).

- [x] `ProkerCard` menampilkan progress bar persentase; warna badge status diturunkan dari `progressPercent`.

- [x] Asset resolver bersama `src/lib/prokerAssets.ts` (`import.meta.glob` → `resolveProkerImage(key)`).

- [x] Build verified: 12 halaman, prose CSS ter-bundle, progress bar & checklist render di semua 6 detail.

### [Day 6] - Halaman Berita & Dynamic Routing ✅

- [x] Membuat 4 konten berita Markdown realistis: `rekap-pengecoran-jalan-vital`, `inovasi-diversifikasi-olahan-pangan`, `implementasi-iot-dan-smart-umkm`, `persiapan-pameran-expo-gelar-karya`.
- [x] Membuat 4 SVG thumbnail berita di `src/assets/berita/` untuk keperluan `astro:assets`.
- [x] Membangun `src/lib/beritaAssets.ts` — resolver gambar via `import.meta.glob`.
- [x] Membangun `src/pages/berita/index.astro` — header "Warta Pengmas", featured banner horizontal (berita utama), grid 3 kolom artikel reguler dengan thumbnail 16:10, badge, tanggal, judul hover brand, ringkasan.
- [x] Membangun `src/pages/berita/[...slug].astro` — `getStaticPaths()`, breadcrumb navigasi, header kategori + judul + metadata (penulis, tanggal, readTime), hero image `rounded-3xl`, isi `prose prose-slate lg:prose-lg`, kartu penanggung jawab redaksi, tombol kembali + share Twitter/WhatsApp.
- [x] Memperbaiki `NewsGrid.astro` — tautan kartu dan tombol "Baca Selengkapnya" mengarah ke `/berita/${item.id}` (individual artikel).
- [x] Navbar & Footer sudah memiliki menu "Berita" → `/berita` dan indikator `active` berfungsi di `/berita` & `/berita/*`.
- [x] Build verified: **17 halaman** (12 sebelumnya + 1 listing `/berita` + 4 detail artikel).

### [Day 6 - Hotfix] - Expo Modal Pop-up & Pembersihan Countdown Statis ✅

- [x] Membuat `ExpoModal.astro` — glassmorphism dialog pop-up (`fixed inset-0 z-50 backdrop-blur-md`) dengan:
  - Header: badge "Puncak Pengabdian", judul "Expo Gelar Karya FTI Banyubiru", tombol close ✕.
  - Countdown real-time 4 kotak bento (Hari, Jam, Menit, Detik) dengan style brand-700.
  - Info lokasi (Balai Desa Banyubiru) dan waktu (25 Agustus 2026, 09.00 WIB).
  - Agenda ringkas: demo 6 prodi, pameran UMKM, talkshow, pentas seni.
  - Tombol "Tutup" + close via backdrop click + tombol ESC.
  - Script kompatibel `astro:page-load` untuk View Transitions.
- [x] Membersihkan `CTA.astro`: hapus import & render `<Countdown />`, ubah `<a href="/berita">` menjadi `<button id="btn-open-expo" type="button">`, import & render `<ExpoModal />`.
- [x] Build verified: 17 halaman, modal countdown berfungsi tanpa countdown statis di Beranda.

### ⚠️ Blocker / Catatan Khusus

- _Koleksi Foto:_ Memastikan tim dokumentasi lapangan mengumpulkan foto resolusi tinggi untuk 6 program kerja dan lanskap Rawa Pening.