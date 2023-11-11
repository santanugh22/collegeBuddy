import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals:true,
    environment: "jsdom",
    setupFiles:'./test/Setup.js'
  },
});
