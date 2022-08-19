import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts']
        }
      },
    },
  },
  base: process.env.ELECTRON == "true" ? './' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/")
      // find: "@", replacement:path.resolve(__dirname,'src')
    },
  },
  server: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:9000/',
        changeOrigin: false,
        ws: false,
        rewrite: (pathStr) => pathStr.replace('/api', ''),
        timeout: 5000,
      },
    },
  },
})