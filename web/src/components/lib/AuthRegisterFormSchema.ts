
import * as z from 'zod';

export const AuthRegisterFormSchema = z.object({
  firstName: z
    .string({
      required_error: 'First name is required.',
    }),
  lastName: z
    .string({
      required_error: 'Last name is required.',
    }),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  username: z
    .string({
      required_error: 'Username is required.',
    }),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(6, {
      message: 'Password must be at least 6 characters.',
    })
})
