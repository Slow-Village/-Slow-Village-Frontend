/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/Slow-Village-Frontend',
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
    tsconfigPaths(),
  ],
});
