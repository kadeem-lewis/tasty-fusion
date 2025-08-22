import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    menu: defineCollection({
      type: "data",
      source: "menu/**.json",
      schema: z.object({
        name: z.string(),
        isActive: z.boolean().default(true),
        order: z.number().int().positive(),
        items: z.array(
          z.object({
            name: z.string(),
            description: z.string().optional(),
            isAvailable: z.boolean().default(true),
            price: z.number().positive().int(),
            variants: z.array(z.string()).optional(),
          })
        ),
      }),
    }),
  },
});
