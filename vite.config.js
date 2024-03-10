import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './dist', //Added
    rollupOptions: {
      // input: {
      //   app: './index.html', // default
      // },
      input: ['src/main.jsx', './index.html']
    },
    
  },
})