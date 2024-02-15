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
    schema: z.object({
        name: z.string(),
        slug: z.string(),
        date: z.date(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
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