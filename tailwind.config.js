/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-warm':      '#F8F7F5',
        'surface':      '#FFFFFF',
        'text-primary': '#141414',
        'text-secondary':'#5A5A5A',
        'accent':       '#8B1A1A',
        'accent-hover': '#721515',
        'accent-soft':  '#F5E8E8',
        'accent-mid':   '#C0392B',
        'warm-neutral': '#EDE8E3',
        'dark-section': '#111111',
        'border-soft':  '#E2DDD8',
        'muted-bg':     '#F2F0ED',
      },
      fontFamily: {
        heading: ['"Manrope"', 'system-ui', 'sans-serif'],
        body:    ['"Inter"',   'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
