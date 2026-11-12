import desa from '../assets/photos/desa.webp';
import sawah from '../assets/photos/sawah.webp';
import tani from '../assets/photos/tani.webp';
import pasar from '../assets/photos/pasar.webp';
import dapur from '../assets/photos/dapur.webp';
import pangan from '../assets/photos/pangan.webp';
import mahasiswa from '../assets/photos/mahasiswa.webp';
import jalan from '../assets/photos/jalan.webp';
import surya from '../assets/photos/surya.webp';
import digital from '../assets/photos/digital.webp';
import kerajinan from '../assets/photos/kerajinan.webp';
import senja from '../assets/photos/senja.webp';

/** Foto Unsplash yang dipakai sebagai ilustrasi sampai dokumentasi lapangan tersedia. */
export const photos = {
  desa,
  sawah,
  tani,
  pasar,
  dapur,
  pangan,
  mahasiswa,
  jalan,
  surya,
  digital,
  kerajinan,
  senja,
} as const;

export type PhotoKey = keyof typeof photos;
