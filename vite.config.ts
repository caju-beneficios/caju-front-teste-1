import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import istanbul from "vite-plugin-istanbul";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
