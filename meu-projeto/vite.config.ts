import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Evita problemas de carregamento no Vercel
  build: {
    outDir: "dist", // Garante que a build seja gerada na pasta correta
  },
});
