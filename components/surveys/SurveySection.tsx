'use client'

import { motion } from 'framer-motion'
import { Users, Stethoscope } from 'lucide-react'
import SurveyCard from './SurveyCard'
import { fadeInUp, staggerChildren } from '@/lib/animations'

export default function SurveySection() {
    return (
        <motion.section
            id="survey"
            className="py-20 px-4 bg-gradient-to-r from-green-50 to-white"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
        >
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
                >
                    Participez à nos enquêtes
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div variants={fadeInUp}>
                        <SurveyCard
                            icon={<Users className="w-8 h-8 text-white" />}
                            title="Enquête Parents"
                            description="Aidez-nous à mieux comprendre vos besoins et attentes"
                            content="Votre participation nous permettra de créer une plateforme qui répond vraiment à vos besoins."
                            buttonColor="bg-green-600 hover:bg-green-700"
                            link="https://forms.gle/jEpR3YLxFcDNw8Tq9"
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <SurveyCard
                            icon={<Stethoscope className="w-8 h-8 text-white" />}
                            title="Enquête Professionnels"
                            description="Partagez votre expertise pour améliorer notre plateforme"
                            content="Votre expérience professionnelle est précieuse pour construire un outil efficace."
                            buttonColor="bg-green-500 hover:bg-green-600"
                            link="https://forms.gle/x7GiYFAPueR3pDiE7"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
