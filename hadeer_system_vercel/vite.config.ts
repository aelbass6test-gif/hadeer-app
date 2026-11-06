import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'نظام متابعة هدير أحمد',
        short_name: 'نظام المتابعة',
        theme_color: '#1e3a8a',
        background_color: '#f9fafb',
        display: 'standalone',
        orientation: 'portrait',
        dir: 'rtl',
        icons: []
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});