import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    team: z.string(),
    tech: z.array(z.string()),
    links: z.object({
      demo: z.string().optional(),
      github: z.string().optional(),
      pdf: z.string().optional(),
      slides: z.string().optional(),
    }),
    featured: z.boolean(),
    images: z.array(z.string()),
  }),
});

const writingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    pdf: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  writing: writingCollection,
};
