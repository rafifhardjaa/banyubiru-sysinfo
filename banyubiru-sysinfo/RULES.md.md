# AI Agent & Coding Rules (OpenCode & DeepSeek Constraints)

Dokumen ini adalah aturan mutlak yang wajib dipatuhi oleh AI Agent saat menulis, mengedit, dan me-refactor kode.

## 1. Core Framework Rules (Astro.js)

- **Zero-JS Baseline:** Gunakan komponen murni `.astro`. Jangan menyertakan framework client (React/Vue/Svelte) kecuali ada kebutuhan interaktivitas dinamis yang secara eksplisit diminta.
    
- **Component Modularity:** Setiap seksi halaman harus dipecah menjadi file komponen terisolasi di `src/components/` (misal: `Hero.astro`, `Timeline.astro`, `BentoStory.astro`).
    
- **Layout Consistency:** Seluruh halaman pada `src/pages/` wajib dibungkus menggunakan template `Layout.astro`.
    

## 2. Image Optimization Rules

- **Wajib Menggunakan `astro:assets`:**
    

Cuplikan kode

```
---
import { Image } from 'astro:assets';
import heroImg from '../assets/hero/gotong-royong.jpg';
---
<Image src={heroImg} alt="Deskripsi gambar" class="rounded-[2rem] object-cover" />
```

- **Larangan Tag `<img>` Mentah untuk Asset Lokal:** Dilarang keras menggunakan `<img src="...">` biasa untuk file lokal agar konversi otomatis WebP/AVIF dan resolusi responsif berjalan optimal.
    
- **Lazy Loading:** Pastikan gambar di bawah lipatan layar (_below-the-fold_) menyertakan atribut `loading="lazy"`.
    

## 3. Styling & Tailwind CSS Rules

- **Token Konsistensi:** Wajib menggunakan token warna `brand-700` (`#0f766e`), `surface-light`, dan `surface-dark` sesuai definisi pada `design.md`.
    
- **Tidak Menulis Custom CSS Inline:** Hindari atribut `style="..."` atau blok `<style>` manual jika class utilitas Tailwind sudah menyediakannya.
    
- **Grid Symmetry:** Bagian katalog program kerja **wajib selalu 6 kartu (2 baris x 3 kolom)** untuk merepresentasikan 6 prodi FTI secara simetris.
    

## 4. Content & Data Rules

- Seluruh data artikel dan rekap lapangan wajib dibaca melalui Astro Content Collections API (`getCollection('berita')`).
    
- Dilarang membuat _hardcoded data_ langsung di dalam template halaman jika data tersebut bersifat dinamis (seperti daftar artikel berita).