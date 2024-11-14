import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import vitePluginSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), vitePluginSvgr()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
});
