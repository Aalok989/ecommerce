import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.warn('Unresolved import:', warning.source);
        } else {
          warn(warning);
        }
      },
    },
  },
});