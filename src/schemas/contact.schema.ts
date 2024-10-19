import { z } from 'zod'

const contactSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  title: z.string().min(6, { message: 'Title must be at least 6 characters long.' }),
  description: z.string().min(8, { message: 'Description must be at least 8 characters long.' }),
})

export default contactSchema
