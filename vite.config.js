import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lod-goodness-gym.netlify.app/',
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  }
})
