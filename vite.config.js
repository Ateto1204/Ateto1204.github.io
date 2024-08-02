import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  base: "/", 
    resolve: {
    alias: {
      '@': '/src',
    },
  }, 
  build: {
    rollupOptions: {
      external: ['@fortawesome/free-brands-svg-icons']
    }
  }
});
