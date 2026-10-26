import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sessions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sessions" }),
  schema: z.object({
    day: z.string(),
    time: z.string(),
    title: z.string(),
    format: z.enum(["Standard", "Abridged", "Starter"]),
    partner: z.string(),
    hosted: z.boolean().default(false),
    supervised: z.boolean().default(false),
    registration: z.string().url().optional(),
    host: z.string().optional(),
    director: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { sessions };
