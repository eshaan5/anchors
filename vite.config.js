import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [tsconfigPaths(), react()],
  define: {
    // You can directly access process.env in your code
    "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
    // 'process.env.YOUR_BOOLEAN_VARIABLE': process.env.YOUR_BOOLEAN_VARIABLE,
    // If you want to expose all env variables, which is not recommended
    // 'process.env': process.env
  },
});
