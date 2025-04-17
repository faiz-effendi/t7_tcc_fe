import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  server: {
    host: true, // supaya bisa diakses dari luar
    port: process.env.PORT || 5173,
    allowedHosts: ['.run.app'], // biar semua *.run.app dari Cloud Run boleh akses
  }
})
