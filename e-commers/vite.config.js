import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/FeriaOnline/', 
  plugins: [react()],
  build: {
    outDir: 'dist' 
  }
});
