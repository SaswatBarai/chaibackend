import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/api/jokes': {
        target: 'http://localhost:3000', // Use http if the server doesn't support https
        changeOrigin: true,
        secure: false, // Use false to disable SSL validation for self-signed certs
      },
    }
    
  }
})
