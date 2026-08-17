// ============================================================================
// FILE: astro.config.mjs
// ============================================================================

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sharad.is-a.dev',
  integrations: [react(), sitemap()],
  output: 'static',
  vite: {
    optimizeDeps: {
      include: ['lucide-react', 'react', 'react-dom'],
    },
  },
});
