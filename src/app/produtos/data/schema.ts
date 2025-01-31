import {z} from "zod"

export const productsSchema = z.object({
  id: z.string(),
  title: z.string(),
  tag: z.string(),
  price: z.string(),
  description: z.string(),
  height: z.string(),
  timeProduction: z.string(),
  pattern: z.string(),
  weight: z.string()
});

export type Task = z.infer<typeof productsSchema>;