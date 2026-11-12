import typography from '@tailwindcss/typography';

/**
 * Furrow theme. Every colour, size and face resolves through a token declared
 * in src/styles/tokens.css; the legacy names (paper, ink, line, danau, clay)
 * stay mapped so untouched markup keeps the same roles while pages migrate.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          light: 'var(--color-paper-2)',
          deep: 'var(--color-paper-3)',
          sheet: 'var(--color-sheet)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          soft: 'var(--color-ink-2)',
          mute: 'var(--color-muted)',
          // Decorative only: rules, disabled marks, non-essential detail.
          faint: 'var(--color-muted)',
        },
        line: {
          DEFAULT: 'var(--color-rule)',
          soft: 'var(--color-grid)',
          strong: 'var(--color-grid-strong)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          soft: 'var(--color-accent-soft)',
          ink: 'var(--color-accent-ink)',
          focus: 'var(--color-focus)',
        },
        green: {
          DEFAULT: 'var(--color-green)',
          soft: 'var(--color-green-soft)',
        },
        contour: 'var(--color-contour)',
        water: 'var(--color-water)',
        hedge: 'var(--color-hedge)',
        // Legacy aliases, same furrow roles.
        danau: {
          DEFAULT: 'var(--color-green)',
          deep: 'var(--color-ink)',
          deeper: 'var(--color-ink)',
          mid: 'var(--color-green)',
          light: 'var(--color-green-soft)',
          soft: 'var(--color-green-soft)',
        },
        clay: {
          DEFAULT: 'var(--color-accent)',
          deep: 'var(--color-ink-2)',
          light: 'var(--color-accent-soft)',
        },
      },
      fontFamily: {
        display: ['"Red Hat Display"', '"Red Hat Text"', 'ui-sans-serif', 'sans-serif'],
        sans: ['"Red Hat Text"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Red Hat Text"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Red Hat Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'display-sm': ['var(--text-display-s)', { lineHeight: '1.02', letterSpacing: 'var(--tracking-display)' }],
        display: ['var(--text-display)', { lineHeight: '1', letterSpacing: 'var(--tracking-display)' }],
        section: ['var(--text-section)', { lineHeight: '1.04', letterSpacing: 'var(--tracking-display)' }],
        title: ['var(--text-title)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      lineHeight: {
        heading: '1.05',
        body: '1.62',
      },
      letterSpacing: {
        tightest: 'var(--tracking-display)',
        label: '0',
      },
      maxWidth: {
        measure: '65ch',
        'measure-narrow': '52ch',
        'measure-wide': '74ch',
        wrap: 'var(--container)',
        'wrap-wide': '1560px',
      },
      spacing: {
        gutter: 'var(--gutter)',
        section: 'var(--section-gap)',
        'section-s': 'var(--section-gap-s)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        entry: 'var(--radius-entry)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        lift: 'var(--shadow-lift)',
      },
      transitionTimingFunction: {
        editorial: 'var(--ease-out)',
        'out-quart': 'var(--ease-out)',
      },
      transitionDuration: {
        micro: 'var(--dur-micro)',
        fast: 'var(--dur-short)',
        base: 'var(--dur-short)',
        slow: 'var(--dur-long)',
      },
      gridTemplateColumns: {
        map: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [typography],
};
