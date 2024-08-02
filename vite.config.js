import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  base: "/", 
    resolve: {
    alias: {
      '@': '/src',
      '@fortawesome/free-regular-svg-icons': path.resolve(__dirname, 'node_modules/@fortawesome/free-regular-svg-icons'),
      '@fortawesome/free-brands-svg-icons': path.resolve(__dirname, 'node_modules/@fortawesome/free-brands-svg-icons'),
    },
  }, 
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/fontawesome-svg-core'
      ]
    }
  }
});
