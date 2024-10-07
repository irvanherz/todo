
import * as z from 'zod';

export const WorkspaceFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    }),

  description: z
    .optional(z.string())
})
