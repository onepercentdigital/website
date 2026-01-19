import contentCollections from '@content-collections/vite';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config = defineConfig({
  plugins: [
    devtools(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    contentCollections(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true, // Discovers /blog/$slug routes from /blog links
        autoStaticPathsDiscovery: true,
        retryCount: 5,
        retryDelay: 2000,
        concurrency: 2,
      },
    }),
    viteReact(),
  ],
});

export default config;
