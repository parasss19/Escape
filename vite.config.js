import { defineConfig } from 'vite';

export default defineConfig({
   base: '/Tailwind-Project/',
   css: {
    postcss: './postcss.config.js', // Path to your PostCSS configuration
  },
});