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
import { toast } from 'sonner'
import { useState } from 'react'
import {
    schoolSchema, SchoolFormData
} from '@/types/validations/schoolSchema'
import { useRouter } from 'next/navigation'

export default function SchoolForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<SchoolFormData>({
        resolver: zodResolver(schoolSchema),
    })

    const onSubmit = async (data: SchoolFormData) => {
        setLoading(true)
        try {
            const res = await fetch('/api/school', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()
            if (result.success) {
                toast.success("Établissement inscrit avec succès !")
                reset()
                router.refresh()
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
        <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
            <CardHeader>
                <CardTitle className="text-2xl text-center text-green-800">
                    Recensement Écoles
                </CardTitle>
                <CardDescription className="text-center">
                    Inscrivez votre établissement sur notre plateforme
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <Label htmlFor="schoolName">Nom de l&apos;école *</Label>
                        <Input id="schoolName" {...register('schoolName')} className="rounded-full" />
                        {errors.schoolName && <p className="text-red-500 text-sm">{errors.schoolName.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="schoolType">Type d&apos;établissement *</Label>
                        <Select onValueChange={(val) => setValue('schoolType', val)}>
                            <SelectTrigger className="rounded-full">
                                <SelectValue placeholder="Sélectionnez le type..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ecole-specialisee">École spécialisée</SelectItem>
                                <SelectItem value="ecole-inclusive">École inclusive</SelectItem>
                                <SelectItem value="centre-formation">Centre de formation</SelectItem>
                                <SelectItem value="ime">Institut Médico-Éducatif</SelectItem>
                                <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.schoolType && <p className="text-red-500 text-sm">{errors.schoolType.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="address">Adresse *</Label>
                        <Input id="address" {...register('address')} className="rounded-full" />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Téléphone *</Label>
                            <Input id="phone" type="tel" {...register('phone')} className="rounded-full" />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" {...register('email')} className="rounded-full" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="manager">Nom du responsable</Label>
                        <Input id="manager" {...register('manager')} className="rounded-full" />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 rounded-full py-3 text-lg"
                    >
                        {loading ? 'Enregistrement...' : "Inscrire l'établissement"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
