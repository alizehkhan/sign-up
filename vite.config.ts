import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@design-system": path.resolve(__dirname, "src/design-system/components"),
    },
  },
  plugins: [react(), eslint()],
});
