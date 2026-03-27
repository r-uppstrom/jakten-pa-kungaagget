import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/eaaster-egg-hunt/',
  plugins: [react()],
});