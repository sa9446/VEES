import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0B0F17',
        'brand-lime': '#CCFF00',
        'brand-cyan': '#00F0FF',
        'brand-slate': '#111827',
      },
      backdropBlur: {
        'md': '12px',
      },
    },
  },
  plugins: [],
}
export default config
