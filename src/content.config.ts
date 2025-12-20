import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// define collections
const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const works = defineCollection({
  loader: glob({ base: "./src/content/works", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    performedBy: z.union([z.string(), z.array(z.string())]).optional(),
    performances: z.array(z.string()).optional(),
  }),
});

const research = defineCollection({
  loader: glob({ base: "./src/content/research", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    doi: z.string().optional(),
    isbn: z.string().optional(),
    bibtex: z.string().optional(),
    paperURL: z.string().optional(),
    codeURL: z.string().optional(),
    url: z.string().optional(),
  }),
});

const performers = defineCollection({
  loader: glob({ base: "./src/content/performers", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const scores = defineCollection({
  loader: glob({ base: "./src/content/scores", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pdf: z.string(),
  }),
});

export const collections = { blog, works, research, performers, events, scores };
