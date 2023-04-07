import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For some reason font-face directives are not working without this
  // https://stackoverflow.com/questions/70086712/load-local-fonts-in-vite-vue3-project
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
