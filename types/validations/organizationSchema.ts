import { z } from 'zod'

export const organizationSchema = z.object({
    organizationName: z.string().min(1, "Nom requis"),
    organizationType: z.string().min(1, "Type requis"),
    address: z.string().min(1, "Adresse requise"),
    phone: z.string().min(1, "Téléphone requis"),
    email: z.string().email("Email invalide"),
    manager: z.string().optional(),
})

export type OrganizationFormData = z.infer<typeof organizationSchema>
