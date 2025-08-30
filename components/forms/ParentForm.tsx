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
import { parentSchema, ParentFormData } from '@/types/validations/parentSchema'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ParentForm() {
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<ParentFormData>({
        resolver: zodResolver(parentSchema),
    })

    const onSubmit = async (data: ParentFormData) => {
        setLoading(true)
        try {
            const res = await fetch('/api/parent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()
            if (result.success) {
                toast.success('Parent inscrit avec succès !')
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
        <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
            <CardHeader>
                <CardTitle className="text-2xl text-center text-green-800">
                    Inscription Parents
                </CardTitle>
                <CardDescription className="text-center">
                    Rejoignez notre communauté de parents bienveillants
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="lastName">Nom *</Label>
                            <Input id="lastName" {...register('lastName')} className="rounded-full" />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="firstNames">Prénoms *</Label>
                            <Input id="firstNames" {...register('firstNames')} className="rounded-full" />
                            {errors.firstNames && (
                                <p className="text-red-500 text-sm">{errors.firstNames.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="address">Adresse/Ville *</Label>
                        <Input id="address" {...register('address')} className="rounded-full" />
                        {errors.address && (
                            <p className="text-red-500 text-sm">{errors.address.message}</p>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Téléphone *</Label>
                            <Input id="phone" type="tel" {...register('phone')} className="rounded-full" />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">{errors.phone.message}</p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" {...register('email')} className="rounded-full" />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="childrenCount">Nombre d&apos;enfants à besoins spécifiques</Label>
                        <Select onValueChange={(value) => setValue('childrenCount', value)}>
                            <SelectTrigger className="rounded-full">
                                <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 enfant</SelectItem>
                                <SelectItem value="2">2 enfants</SelectItem>
                                <SelectItem value="3">3 enfants</SelectItem>
                                <SelectItem value="4+">4 enfants ou plus</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 rounded-full py-3 text-lg"
                    >
                        {loading ? 'Enregistrement...' : "S'inscrire comme parent"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
