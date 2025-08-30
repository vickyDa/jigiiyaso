'use client'

import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { toast } from 'sonner'
import {
    professionalSchema, ProfessionalFormData
} from '@/types/validations/professionalSchema'

export default function ProfessionalForm() {
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<ProfessionalFormData>({
        resolver: zodResolver(professionalSchema),
    })

    const onSubmit = async (data: ProfessionalFormData) => {
        setLoading(true)
        try {
            const res = await fetch('/api/professional', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()
            if (result.success) {
                toast.success('Professionnel inscrit avec succès !')
                reset()
            } else {
                toast.error('Erreur lors de l’inscription.')
            }
        } catch (error) {
            toast.error('Erreur réseau ou serveur.')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
            <CardHeader>
                <CardTitle className="text-2xl text-center text-green-800">
                    Inscription Professionnels
                </CardTitle>
                <CardDescription className="text-center">
                    Rejoignez notre réseau de professionnels
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="lastName">Nom *</Label>
                            <Input id="lastName" {...register('lastName')} className="rounded-full" />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="firstNames">Prénoms *</Label>
                            <Input id="firstNames" {...register('firstNames')} className="rounded-full" />
                            {errors.firstNames && <p className="text-red-500 text-sm">{errors.firstNames.message}</p>}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="specialty">Spécialité *</Label>
                        <Select onValueChange={(val) => setValue('specialty', val)}>
                            <SelectTrigger className="rounded-full">
                                <SelectValue placeholder="Sélectionnez votre spécialité..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="avis">AVIS (Auxiliaire de Vie Scolaire)</SelectItem>
                                <SelectItem value="educateur">Éducateur spécialisé</SelectItem>
                                <SelectItem value="orthophoniste">Orthophoniste</SelectItem>
                                <SelectItem value="ergotherapeute">Ergothérapeute</SelectItem>
                                <SelectItem value="pediatre">Pédiatre</SelectItem>
                                <SelectItem value="dentiste">Dentiste</SelectItem>
                                <SelectItem value="psychologue">Psychologue</SelectItem>
                                <SelectItem value="psychomotricien">Psychomotricien</SelectItem>
                                <SelectItem value="kinesitherapeute">Kinésithérapeute</SelectItem>
                                <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.specialty && <p className="text-red-500 text-sm">{errors.specialty.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="address">Adresse *</Label>
                        <Input id="address" {...register('address')} className="rounded-full" />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Numéro de téléphone *</Label>
                            <Input id="phone" type="tel" {...register('phone')} className="rounded-full" />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" {...register('email')} className="rounded-full" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-500 hover:bg-green-600 rounded-full py-3 text-lg"
                    >
                        {loading ? 'Enregistrement...' : "S'inscrire comme professionnel"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
