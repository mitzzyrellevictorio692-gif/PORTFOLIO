import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/PORTFOLIO/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // ✏️ EDIT ME: set `base` to '/<your-repo-name>/' when deploying to GitHub Pages
  // (e.g. base: '/portfolio/'). Leave as '/' for Netlify, Vercel, or a custom domain.
  base: '/',
})
