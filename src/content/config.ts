import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    }),
});

const releasesCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        slug: z.string(),
        date: z.date(),
        title: z.string(),
        description: z.string(),
        image: image().refine((img) => img.width >= 900, {
            message: 'Image must be at least 900px wide',
        }),
        imageAlt: z.string(),
        artists: z.array(z.string()),
        bandcamp: z.string().url().optional(),
        spotify: z.string().url().optional(),
        appleMusic: z.string().url().optional(),
        soundcloud: z.string().url().optional(),
        youtube: z.string().url().optional(),
        amazonMusic: z.string().url().optional(),
        tidal: z.string().url().optional(),
        deezer: z.string().url().optional(),
        lyrics: z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
    releases: releasesCollection,
};