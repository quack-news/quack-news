import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
	loader: glob({ base: './src/content/noticias', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		author: z.string(),
		updatedDate: z.coerce.date().optional(),
		image: z.object({
			src: image(),
			alt: z.string(),
			caption: z.string().optional(),
		}),
		category: z.string(),
		tags: z.array(z.string()),
	}),
});

const receitas = defineCollection({
    loader: glob({ base: './src/content/receitas', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            src: image(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    }),
});


export const collections = { noticias, receitas };
