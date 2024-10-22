import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString(); // Chunk libraries
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Adjust size limit to 2000 KB (for example)
  },
})
