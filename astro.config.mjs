// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tomtranjr.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// Fontsource files download at build time and are served from this site.
			provider: fontProviders.fontsource(),
			name: 'Source Serif 4',
			cssVariable: '--font-serif',
			weights: ['400 700'],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'serif'],
		},
	],
});
