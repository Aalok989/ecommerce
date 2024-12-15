import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Development server port
  },
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
      'react-toastify': 'react-toastify',
    },
  },
  build: {
    rollupOptions: {
      external: [],
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
