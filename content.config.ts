import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    menu: defineCollection({
      type: "data",
      source: "menu/**.json",
      schema: z.object({
        name: z.string(),
        isActive: z.boolean().default(true),
        items: z.array(
          z.object({
            name: z.string(),
            description: z.string().optional(),
            price: z.number().positive().int(),
          })
        ),
      }),
    }),
  },
});
