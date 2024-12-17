import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Set the base path
  plugins: [react()],
  server: {
    port: 5173
  }
})
