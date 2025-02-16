import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000, // Port for the Vite dev server
    proxy: {
      // Proxy API requests to your backend server
      "/users": "http://localhost:3001",
      "/authenticate": "http://localhost:3001",
    },
  },
});
