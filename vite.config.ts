import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173,
    cors: true,
    // proxy: {
    //   "/api": {
    //     target: "http://216.250.10.181:9000",
    //     // target: "http://192.168.100.244:3000",
    //     // target: "http://localhost:3000",
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
});
