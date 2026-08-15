const beritaImages = import.meta.glob('../assets/berita/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function resolveBeritaImage(key: string): string {
  return beritaImages[`../assets/berita/${key}.svg`] ?? Object.values(beritaImages)[0];
}