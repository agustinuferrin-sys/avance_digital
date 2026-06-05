import type { Config } from 'tailwindcss';
import { tokens } from './src/theme/tokens';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: tokens.color.navy,
        bg: tokens.color.bg,
        brand: tokens.color.brand,
        brandAlt: tokens.color.brandAlt,
        blue: tokens.color.blue,
        skyLight: tokens.color.skyLight,
        white: tokens.color.white,
        muted: tokens.color.muted,
      },
      fontFamily: {
        display: [tokens.font.display],
        body: [tokens.font.body],
        sans: [tokens.font.body], // override default
      },
      borderRadius: {
        pill: tokens.radius.pill,
        card: tokens.radius.card,
        lg: tokens.radius.lg,
      },
    },
  },
  plugins: [],
};

export default config;
