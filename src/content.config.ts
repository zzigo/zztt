import { defineCollection, z } from "astro:content";

/* =========================
   BLOG
   ========================= */

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

/* =========================
   WORKS
   ========================= */

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    performedBy: z.union([z.string(), z.array(z.string())]).optional(),
    performances: z.union([z.string(), z.array(z.string())]).optional(),
  }),
});

/* =========================
   RESEARCH
   =========================
   Supports both:
   - research articles
   - research-statement.md (manifesto / header text)
   ========================= */

const research = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
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

    slug: z.string().optional(),
  }),
});

/* =========================
   PERFORMERS
   ========================= */

const performers = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

/* =========================
   EVENTS
   ========================= */

const events = defineCollection({
  schema: z
    .object({
      date: z.coerce.date().optional(),
      hour: z.string().optional(),
      dates: z.array(z.string()).optional(),
      work: z.string(),
      performedBy: z.union([z.string(), z.array(z.string())]),
      eventName: z.string(),
      venue: z.string(),
      city: z.string(),
      country: z.string(),
      url: z.string().optional(),
    })
    .transform((data) => {
      let finalDates = [];
      if (data.dates) {
        finalDates = data.dates;
      } else if (data.date) {
        const dateString = data.date.toISOString().split("T")[0];
        if (data.hour) {
          finalDates.push(`${dateString}-${data.hour}`);
        } else {
          finalDates.push(dateString);
        }
      }

      const { date, hour, ...rest } = data;

      return {
        ...rest,
        dates: finalDates,
      };
    })
    .pipe(
      z.object({
        dates: z
          .array(
            z.string().transform((val) => {
              const lastDashIndex = val.lastIndexOf("-");
              if (
                lastDashIndex !== -1 &&
                val.substring(lastDashIndex + 1).includes(":")
              ) {
                const date = val.substring(0, lastDashIndex);
                const hour = val.substring(lastDashIndex + 1);
                return { date: date, hour: hour };
              }
              return { date: val, hour: undefined };
            })
          )
          .pipe(
            z.array(
              z.object({
                date: z.coerce.date(),
                hour: z.string().optional(),
              })
            )
          ),
        work: z.string(),
        performedBy: z.union([z.string(), z.array(z.string())]),
        eventName: z.string(),
        venue: z.string(),
        city: z.string(),
        country: z.string(),
        url: z.string().optional(),
      })
    ),
});

/* =========================
   SCORES
   ========================= */

const scores = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pdf: z.string(),
  }),
});

/* =========================
   PAGES
   ========================= */

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

/* =========================
   EXPORT
   ========================= */

export const collections = {
  blog,
  works,
  research,
  performers,
  events,
  scores,
  pages,
};
