const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          highlight: 'var(--color-text-highlight)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-bg-base)',
          backdrop: 'var(--color-bg-backdrop)',
          'button-base': 'var(--color-button-base)',
          'button-border': 'var(--color-button-border)'
        }
      }
    }
  },
  plugins: [],
};
