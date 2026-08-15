import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const beritaCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/berita' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      'Rekap Lapangan',
      'Inovasi Pangan',
      'Digitalisasi & IoT',
      'Gelar Karya',
      'Infrastruktur',
    ]),
    publishDate: z.coerce.date(),
    author: z.string().default('Divisi Media & IT FTI'),
    image: z.string(),
    readTime: z.string().default('3 min read'),
    featured: z.boolean().default(false),
  }),
});

const prokerCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proker' }),
  schema: z.object({
    prodi: z.enum([
      'Teknik Mesin',
      'Teknik Sipil',
      'Teknik Elektro',
      'Teknik Arsitektur',
      'Teknologi Pangan',
      'Teknik Informatika',
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

const umkmCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/umkm' }),
  schema: z.object({
    name: z.string(),
    owner: z.string(),
    category: z.enum(['Pangan Olahan', 'Kerajinan', 'Minuman Tradisional']),
    hamlet: z.string(),
    description: z.string(),
    price: z.string(),
    image: z.string(),
    waLink: z.string(),
    order: z.number(),
  }),
});

const galeriCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/galeri' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Infrastruktur',
      'Inovasi Pangan',
      'Digitalisasi & IoT',
      'Gelar Karya',
      'Sosialisasi',
    ]),
    date: z.coerce.date(),
    image: z.string(),
    aspect: z.enum(['landscape', 'portrait']),
    order: z.number(),
  }),
});

export const collections = {
  berita: beritaCollection,
  proker: prokerCollection,
  umkm: umkmCollection,
  galeri: galeriCollection,
};
