import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/presentation/web',
  build: {
    outDir: '../../../dist/web',
    emptyOutDir: true
  }
});
