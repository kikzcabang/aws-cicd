/// <reference types='vite/client' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
    allowedHosts: ["d3v9g3jar5lqk7.cloudfront.net"],
  },
 
})