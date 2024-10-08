
import * as z from 'zod';

export const TaskFormSchema = z.object({
  title: z
    .string({
      required_error: 'Name is required.',
    }),
  description: z
    .string()
    .optional(),
  starred: z
    .boolean()
    .optional(),  // Optional boolean for starred status

  priority: z
    .string()
    .optional(),  // Optional number for task priority

  status: z
    .string()
    .optional(),  // Optional string for task status (could be enum-based depending on your task system)

  dueAt: z
    .optional(z.date()).nullable(),  // Optional string for due date

})
