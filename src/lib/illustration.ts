import { photos } from './photos';

type Category =
  | 'Rekap Lapangan'
  | 'Inovasi Pangan'
  | 'Digitalisasi & IoT'
  | 'Gelar Karya'
  | 'Infrastruktur';

/** Ilustrasi per kategori berita. Diganti dokumentasi asli saat tersedia. */
const byCategory: Record<Category, keyof typeof photos> = {
  'Rekap Lapangan': 'mahasiswa',
  'Inovasi Pangan': 'pangan',
  'Digitalisasi & IoT': 'digital',
  'Gelar Karya': 'senja',
  Infrastruktur: 'jalan',
};

export function illustrationFor(category: string) {
  return photos[byCategory[category as Category] ?? 'sawah'];
}
