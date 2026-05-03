module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#f7f8fa',
        'panel': '#ffffff', 
        'border': '#e4e7ec',
        'text': '#1f2937',
        'muted': '#6b7280',
        'link': '#1e40af',
      },
      maxWidth: {
        'max': '980px',
      },
    },
  },
  plugins: [],
}