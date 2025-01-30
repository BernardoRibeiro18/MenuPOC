import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  publicDir: "public", // Garante que os arquivos estáticos sejam incluídos
  build: {
    outDir: "dist", // Força a saída para dist
    emptyOutDir: true, // Limpa a pasta antes de cada build
    assetsDir: "assets", // Move os assets para uma pasta específica
  },
});
