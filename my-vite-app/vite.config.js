import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      "/api": "http://localhost:4000",
      "/ws": {
        tartget: "ws://localhost:4000",
        ws:true,
      },
    },
  }
});
