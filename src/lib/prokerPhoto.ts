import { photos } from './photos';

const byCategory: Record<string, keyof typeof photos> = {
  'Energi Terbarukan': 'surya',
  Infrastruktur: 'jalan',
  'Inovasi Pangan': 'dapur',
  'Tata Ruang & Wisata': 'desa',
  'Digitalisasi & IoT': 'digital',
};

/** Ilustrasi per kategori program kerja. Diganti dokumentasi asli saat tersedia. */
export function prokerPhoto(category: string) {
  return photos[byCategory[category] ?? 'mahasiswa'];
}
