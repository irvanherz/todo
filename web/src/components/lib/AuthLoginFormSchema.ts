
import * as z from 'zod';

export const AuthLoginFormSchema = z.object({
  usernameOrEmail: z
    .string({
      required_error: 'Username or email is required.',
    }),

  password: z
    .string({
      required_error: 'Password is required.',
    })
})
