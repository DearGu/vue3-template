import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  build: {
    target: 'es2015',
    sourcemap: true,
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
    VueSetupExtend(),
    legacy(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
});
