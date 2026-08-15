const prokerImages = import.meta.glob('../assets/proker/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function resolveProkerImage(key: string): string {
  return prokerImages[`../assets/proker/${key}.svg`] ?? Object.values(prokerImages)[0];
}