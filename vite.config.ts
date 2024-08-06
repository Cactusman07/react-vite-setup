/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts"
  },
  server: {
    watch: {
      usePolling: true // to get hot reloading working in Windows
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 8000 // this is the port which we will use in docker
  }
});
