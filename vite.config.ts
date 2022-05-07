/* eslint-disable import/extensions,import/no-unresolved */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) =>
  defineConfig({
    base: loadEnv(mode, process.cwd()).NODE_NEV === 'development' ? './' : '/',
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
    server: {
      host: '127.0.0.1',
      port: 3333,
      open: true,
      proxy: loadEnv(mode, process.cwd()).VITE_API_PROXY_URL
        ? {
            '/api': {
              target: loadEnv(mode, process.cwd()).VITE_API_PROXY_URL,
              changeOrigin: true,
            },
          }
        : undefined,
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
      extensions: ['.js', '.ts', '.vue', '.json'],
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dts: true,
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
        resolvers: [ElementPlusResolver()],
      }),
    ],
  });
