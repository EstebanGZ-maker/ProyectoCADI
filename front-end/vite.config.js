import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-production-252a.up.railway.app/', // URL del backend en desarrollo
        changeOrigin: true, // Cambia el origen de las solicitudes para evitar problemas de CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina el prefijo '/api' al reenviar
      },
    },
  },
});
