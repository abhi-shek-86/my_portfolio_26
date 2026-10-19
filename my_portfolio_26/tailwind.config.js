/** Premium Purple palette: #FFFFFF / #A74CA9 / #24162B / #F5F1F7 / #6F6472 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: '#24162B',
        soft: '#F5F1F7',
        muted: '#6F6472',
        brand: { DEFAULT: '#A74CA9', dark: '#8A3A8C', light: '#E2B3E3' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
