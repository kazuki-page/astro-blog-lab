import { defineCollection, z } from "astro:content";

/**
 * Tag 定義
 */
export const TAGS = ["weekly", "monthly", "yearly", "3year"] as const;
export type Tag = typeof TAGS[number];

/**
 * Category 定義
 */
export const CATEGORIES = ["blog", "diary"] as const;
export type Category = typeof CATEGORIES[number];

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      published_date: z.date(),

      // 記事の性質
      category: z.enum(CATEGORIES),

      // diary 用（weekly / monthly / yearly / 3year）
      tags: z.array(z.enum(TAGS)).optional(),
    }),
  }),
};
