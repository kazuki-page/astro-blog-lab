import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      published_date: z.string(),

      // 記事の性質
      category: z.enum(["blog", "diary"]),

      // diary 用（weekly / monthly / yearly / 3year）
      tags: z.array(
        z.enum(["weekly", "monthly", "yearly", "3year"])
      ).optional(),
    }),
  }),
};
