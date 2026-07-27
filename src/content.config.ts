import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// data REAL da gravação/publicação do vídeo (YouTube), distinta de pubDate
		// (que é a data de coleta/publicação do post). GLM-5.2 26/07: entrevistas
		// antigas apareciam com data de hoje — editorialmente errado.
		video_date: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		wp_id: z.number().optional(),
		tags: z.array(z.string()).optional(),
		region: z.string().optional(),
		politician: z.string().optional(),
		party: z.string().optional(),
		source_name: z.string().optional(),
	}),
});

export const collections = { blog };
