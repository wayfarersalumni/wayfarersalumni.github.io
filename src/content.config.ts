import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const alumniCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alumni' }),
  schema: z.object({
    name: z.string(),
    graduationYear: z.number(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    currentRole: z.string().optional(),
    company: z.string().optional(),
    location: z.string().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    registrationUrl: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const tripsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trips' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tripDate: z.date(),
    location: z.string(),
    route: z.string().optional(),
    distance: z.string().optional(),
    elevation: z.string().optional(),
    difficulty: z.enum(['Easy', 'Moderate', 'Challenging', 'Strenuous']),
    conditions: z.string().optional(),
    photos: z.array(z.string()).default([]),
    gallery: z.array(z.object({
      url: z.string(),
      caption: z.string().optional(),
    })).optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  alumni: alumniCollection,
  news: newsCollection,
  events: eventsCollection,
  trips: tripsCollection,
  pages: pagesCollection,
};
