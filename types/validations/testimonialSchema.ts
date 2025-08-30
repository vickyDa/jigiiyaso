import { z } from 'zod'

export const testimonialSchema = z.object({
    name: z.string().min(1, 'Nom requis'),
    role: z.string().optional(),
    testimonial: z.string().min(1, 'Le témoignage est requis'),
})

export type TestimonialFormData = z.infer<typeof testimonialSchema>
