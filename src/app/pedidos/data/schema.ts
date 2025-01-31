import {z} from "zod"

export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    label: z.string(),
    date: z.string(),
    priority: z.string(),
    cliente: z.string(),
    price: z.string()
})

export type Task = z.infer<typeof taskSchema>