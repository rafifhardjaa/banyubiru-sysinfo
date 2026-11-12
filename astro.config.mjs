import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  site: 'https://pengmas-fti-banyubiru.vercel.app',
  integrations: [mdx()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // AVIF sudah setara WebP di angka quality lebih rendah, jadi quality dipisah per format.
        avif: { quality: 60, effort: 3 },
        webp: { quality: 78 },
      },
    },
  },
});
