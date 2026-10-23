import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// One line. Shows in the project list and in meta tags.
			description: z.string(),
			// Sort key. The list shows only the year.
			date: z.coerce.date(),
			// Free text, for example "Feb 2026 to now".
			period: z.string().optional(),
			heroImage: image().optional(),
			heroAlt: z.string().optional(),
			links: z
				.object({
					repo: z.string().url().optional(),
					demo: z.string().url().optional(),
					paper: z.string().optional(),
				})
				.optional(),
		}),
});

export const collections = { projects };
