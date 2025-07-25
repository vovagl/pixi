import { defineConfig } from 'vite';

export default {
  base: '/pixi/',
  server: {
    watch: {
      usePolling: true ,
    },
  },
};
