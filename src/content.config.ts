import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		titulo: z.string(),
		abstract: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		portada: z.string().optional(),
		tags: z.array(z.string()).optional()
	}),
});

const inicio = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/inicio', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		imagen: z.string().optional(),
		video: z.string().optional()
	}),
});

const nosotrxs = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/nosotrxs', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		posicion: z.string().optional(),
		imagen: z.string().optional(),
		contacto: z.string().optional(),
		link: z.string().optional()
	}),
});

export const collections = { blog, inicio, nosotrxs };
