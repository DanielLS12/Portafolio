import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@assets" : path.resolve(__dirname,'./src/assets'),
      "@components" : path.resolve(__dirname,'./src/components'),
      "@pages" : path.resolve(__dirname,'./src/pages')
    },
  },
  plugins: [react()],
})
