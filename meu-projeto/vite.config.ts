import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Garante que os assets carreguem corretamente
  build: {
    outDir: "dist",
  },
});
