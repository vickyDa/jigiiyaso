import { z } from 'zod'

export const professionalSchema = z.object({
    lastName: z.string().min(1, 'Le nom est requis'),
    firstNames: z.string().min(1, 'Les prénoms sont requis'),
    specialty: z.string().min(1, 'La spécialité est requise'),
    address: z.string().min(1, 'L’adresse est requise'),
    phone: z.string().min(1, 'Le téléphone est requis'),
    email: z.string().email('Email invalide'),
})

export type ProfessionalFormData = z.infer<typeof professionalSchema>
