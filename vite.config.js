import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // MIME türü hatalarını çözmek için server ayarlarını ekle
    mimeTypes: {
      '.js': 'application/javascript',
      '.json': 'application/json',
    }
  },
})
