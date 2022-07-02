module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#eff3f6',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
