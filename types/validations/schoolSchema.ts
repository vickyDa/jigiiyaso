import { z } from 'zod'

export const schoolSchema = z.object({
    schoolName: z.string().min(1, "Le nom de l'école est requis"),
    schoolType: z.string().min(1, 'Le type est requis'),
    address: z.string().min(1, "L'adresse est requise"),
    phone: z.string().min(1, 'Le téléphone est requis'),
    email: z.string().email('Email invalide'),
    manager: z.string().optional(),
})

export type SchoolFormData = z.infer<typeof schoolSchema>
