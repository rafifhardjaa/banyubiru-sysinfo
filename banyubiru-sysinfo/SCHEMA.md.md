# Data & Content Schema

Dokumen ini mendefinisikan skema data untuk Astro Content Collections pada file `src/content.config.ts`.

TypeScript

```
import { defineCollection, z } from 'astro:content';

// 1. Koleksi Berita & Rekap Lapangan (Markdown files di src/content/berita/)
const beritaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      'Rekap Lapangan',
      'Inovasi Pangan',
      'Digitalisasi & IoT',
      'Gelar Karya',
      'Infrastruktur'
    ]),
    publishDate: z.date(),
    author: z.string().default('Divisi Media & IT FTI'),
    image: z.string(),
    readTime: z.string().default('3 min read'),
    featured: z.boolean().default(false),
  }),
});

// 2. Koleksi Program Kerja 6 Prodi (Markdown files di src/content/proker/)
const prokerCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proker' }),
  schema: z.object({
    prodi: z.enum([
      'Teknik Mesin',
      'Teknik Sipil',
      'Teknik Elektro',
      'Teknik Arsitektur',
      'Teknologi Pangan',
      'Teknik Informatika'
    ]),
    title: z.string(),
    kategori: z.string(),
    ringkasan: z.string(),
    status: z.string(),
    progressPercent: z.number().min(0).max(100),
    lokasi: z.string(),
    image: z.string(),
    targetLuaran: z.array(z.string()),
    leadProdi: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

export const collections = {
  'berita': beritaCollection,
  'proker': prokerCollection,
};
```

### Contoh File Konten Berita (`src/content/berita/rekap-pengecoran-jalan.md`)

Markdown

```
---
title: "Aksi Nyata Lintas Prodi: Pengecoran dan Penerangan Akses Vital Desa"
summary: "Kolaborasi Teknik Sipil dan Elektro bersama warga dalam merevitalisasi jalan desa Banyubiru."
category: "Rekap Lapangan"
publishDate: 2026-08-15
author: "Divisi Media FTI"
image: "/images/berita/pengecoran.jpg"
readTime: "4 min read"
featured: true
---

Dokumentasi lengkap narasi kegiatan gotong royong warga bersama mahasiswa FTI ditulis disini.
```