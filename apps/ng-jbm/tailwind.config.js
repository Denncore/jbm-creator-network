const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { url } = require('inspector');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundImage: {
        web: "url('/assets/02_complete-background-landingpage.svg')",
        mobile: "url('/assets/mobile/mobile_all-graphics_landingpage.svg')",
        'creators-web': "url('/assets/pages/creators/head-graphic.svg')",
        'creators-mobile':
          "url('/assets/pages/creators/head-graphic-mobile.svg')",
      },
      fontSize: {
        'base-vw': '1.40vw',
        'base-sm': '0.9rem',
        'base-md': '2vw',
        'heading-vw': '2vw',
        'heading-sm': '1.5rem',
        'heading-md': '3vw',
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          highlight: 'var(--color-text-highlight)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-bg-base)',
          backdrop: 'var(--color-bg-backdrop)',
          'mobile-menu': 'var(--color-bg-mobile-menu)',
          'button-base': 'var(--color-button-base)',
        },
      },
      borderColor: {
        skin: {
          'button-base': 'var(--color-button-border)',
        },
      },
    },
  },
  plugins: [],
};
