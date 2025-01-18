import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@assets" : path.resolve(__dirname,'./src/assets'),
      "@components" : path.resolve(__dirname,'./src/components'),
      "@pages" : path.resolve(__dirname,'./src/pages'),
      "@hooks" : path.resolve(__dirname,'./src/hooks'),
      "@data" : path.resolve(__dirname, "./src/data"),
      "@validations" : path.resolve(__dirname, "./src/validations"),
    },
  },
  plugins: [react()],
  base: 'https://daniells12.github.io/Portafolio',
})
