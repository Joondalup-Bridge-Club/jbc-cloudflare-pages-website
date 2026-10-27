import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sessions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sessions" }),
  schema: z.object({
    day: z.string(),
    time: z.string(),
    title: z.string(),
    matchFormat: z.enum(["Pairs", "Swiss pairs", "Teams"]),
    sessionFormat: z.enum(["Standard", "Abridged", "Starter"]),
    restrictions: z.enum(["Open", "Restricted (<300)", "Novice (<100)", "Supernovice (<35)"]),
    partnerRequired: z.boolean(),
    hosted: z.boolean().default(false),
    supervised: z.boolean().default(false),
    registration: z.string().url().optional(),
    hostRegistration: z.string().url().optional(),
    host: z.string().optional(),
    director: z.string().optional(),
    order: z.number(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "events/**/*.md", base: "./src/content" }),
  schema: z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
      const date = new Date(`${value}T00:00:00Z`);
      return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
    }),
    time: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/).optional(),
    title: z.string(),
    matchFormat: z.enum(["Pairs", "Swiss pairs", "Teams"]),
    pointType: z.enum(["Green", "Red", "Gold"]).optional(),
    restrictions: z.enum(["Open", "Restricted (<300)", "Novice (<100)", "Supernovice (<35)"]).optional(),
    description: z.string().optional(),
    registration: z.string().url().optional(),
  }),
});

export const collections = { sessions, events };
