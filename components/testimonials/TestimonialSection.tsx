'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import TestimonialCard from './TestimonialCard'
import { fadeInUp, staggerChildren } from '@/lib/animations'
import { initialTestimonials } from '@/types/data-static/data'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    testimonialSchema,
    TestimonialFormData
} from '@/types/validations/testimonialSchema'

export default function TestimonialSection() {
    const [testimonials, setTestimonials] = useState(initialTestimonials)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TestimonialFormData>({
        resolver: zodResolver(testimonialSchema),
    })

    const onSubmit = async (data: TestimonialFormData) => {
        try {
            const res = await fetch('/api/testimonial', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()

            if (result.success) {
                toast.success('Témoignage envoyé avec succès')
                setTestimonials([data, ...testimonials])
                reset()
            } else {
                toast.error('Erreur : ' + result.error)
            }
        } catch (err) {
            toast.error('Erreur serveur ou réseau')
            console.error(err)
        }
    }

    return (
        <motion.section
            id="testimonial"
            className="py-20 px-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
                >
                    Témoignages de notre communauté
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeInUp}>
                    <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-white">
                        <CardHeader>
                            <CardTitle className="text-xl text-center text-green-800">
                                Partagez votre témoignage
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div>
                                    <Label htmlFor="name">Votre nom (ou initiales)</Label>
                                    <Input
                                        id="name"
                                        {...register('name')}
                                        className="rounded-full"
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Label htmlFor="role">Votre titre/fonction</Label>
                                    <Input
                                        id="role"
                                        {...register('role')}
                                        placeholder="Ex: Mère d’un enfant TSA, éducatrice, etc."
                                        className="rounded-full"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="testimonial">Votre témoignage</Label>
                                    <Textarea
                                        id="testimonial"
                                        {...register('testimonial')}
                                        className="rounded-2xl min-h-[100px]"
                                        placeholder="Partagez votre expérience..."
                                    />
                                    {errors.testimonial && (
                                        <p className="text-sm text-red-500">
                                            {errors.testimonial.message}
                                        </p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-full py-3"
                                >
                                    Envoyer mon témoignage
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.section>
    )
}
