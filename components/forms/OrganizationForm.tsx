'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { toast } from 'sonner'
import {
    organizationSchema,
    OrganizationFormData,
} from '@/types/validations/organizationSchema'

export default function OrganizationForm() {
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<OrganizationFormData>({
        resolver: zodResolver(organizationSchema),
    })

    const onSubmit = async (data: OrganizationFormData) => {
        setLoading(true)
        try {
            const res = await fetch('/api/organization', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()
            if (result.success) {
                toast.success('Organisme enregistré avec succès !')
                reset()
            } else {
                toast.error('Erreur lors de l’enregistrement.')
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
                    Recensement Organismes
                </CardTitle>
                <CardDescription className="text-center">
                    Inscrivez votre organisme sur notre plateforme
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <Label htmlFor="organizationName">Nom de l&apos;organisme *</Label>
                        <Input
                            id="organizationName"
                            {...register('organizationName')}
                            className="rounded-full"
                        />
                        {errors.organizationName && (
                            <p className="text-red-500 text-sm">
                                {errors.organizationName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="organizationType">Type d&apos;organisme *</Label>
                        <Select
                            onValueChange={(val) => setValue('organizationType', val)}
                        >
                            <SelectTrigger className="rounded-full">
                                <SelectValue placeholder="Sélectionnez le type..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="association">Association</SelectItem>
                                <SelectItem value="ong">ONG</SelectItem>
                                <SelectItem value="fondation">Fondation</SelectItem>
                                <SelectItem value="centre-medical">Centre médical</SelectItem>
                                <SelectItem value="hopital">Hôpital</SelectItem>
                                <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.organizationType && (
                            <p className="text-red-500 text-sm">
                                {errors.organizationType.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="address">Adresse *</Label>
                        <Input
                            id="address"
                            {...register('address')}
                            className="rounded-full"
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Téléphone *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register('phone')}
                                className="rounded-full"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                className="rounded-full"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="manager">Nom du responsable</Label>
                        <Input
                            id="manager"
                            {...register('manager')}
                            className="rounded-full"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-500 hover:bg-green-600 rounded-full py-3 text-lg"
                    >
                        {loading ? 'Enregistrement...' : "Inscrire l'organisme"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
