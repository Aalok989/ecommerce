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
