import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5657,
    proxy: {
      '/api': 'http://localhost:5658',
    },
  },
  test: {
    environment: 'jsdom',
  },
})
