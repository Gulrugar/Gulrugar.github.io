import { z, defineCollection } from "astro:content";
import { tags } from "../data/tags";

const project = defineCollection({
  schema: z.object({
    order: z.number(),
    show_on_frontpage: z.boolean(),
    title: z.string(),
    mainTech: z.enum(["Astro", "Shopify", "Next", "Vanilla"]),
    image: z.string(),
    badge: z.enum(["New", "Updated", "In Progress"]).or(z.null()),
    tags: z.array(z.enum(tags)),
    type: z.enum(["Store", "Project"]),
    link: z.string().optional(),
    passwordProtected: z.boolean(),
    storePassword: z.string().optional(),
    githubLink: z.string().optional(),
    shortIntro: z.string(),
  }),
});

export const collections = {
  project,
};
