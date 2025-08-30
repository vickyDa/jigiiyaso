import { z } from 'zod'

export const parentSchema = z.object({
    lastName: z.string().min(1, 'Le nom est requis'),
    firstNames: z.string().min(1, 'Les prénoms sont requis'),
    address: z.string().min(1, 'L’adresse est requise'),
    phone: z.string().min(1, 'Le téléphone est requis'),
    email: z.string().email('Email invalide'),
    childrenCount: z.string().optional(),
})

export type ParentFormData = z.infer<typeof parentSchema>
