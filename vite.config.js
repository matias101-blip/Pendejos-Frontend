import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.0.100',
    port: '8080',
  },
  plugins: [react()],
});
