import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  
  return {
    base: isProduction ? '/portfolio/' : '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    publicDir: 'public',
    server: {
      port: 3000,
      open: true,
      host: true
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      emptyOutDir: true,
      copyPublicDir: true,
      target: 'esnext',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (ext === 'css') {
              return 'assets/css/[name]-[hash][extname]';
            } else if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
              return 'assets/images/[name]-[hash][extname]';
            } else if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            framer: ['framer-motion'],
            icons: ['react-icons']
          }
        }
      }
    },
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }
  };
});
