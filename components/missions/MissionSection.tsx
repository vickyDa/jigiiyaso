'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import MissionCard from './MissionCard'
import { fadeInUp, staggerChildren } from '@/lib/animations'

export default function MissionSection() {
    return (
        <motion.section
            id="mission"
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
                    Notre Mission & Vision
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={fadeInUp}>
                        <MissionCard
                            icon={<Target className="w-8 h-8 text-white" />}
                            title="Notre Mission"
                            description="Créer une plateforme numérique qui regroupe et valorise toutes les écoles, institutions, experts et hôpitaux spécialisés dans la prise en charge du handicap infantile. Fournir aux parents un outil unique pour trouver, comparer, contacter et suivre les acteurs éducatifs et médicaux les plus adaptés à leur enfant."
                            bgGradient="from-green-50 to-green-100"
                            iconBg="bg-green-600"
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <MissionCard
                            icon={<Eye className="w-8 h-8 text-white" />}
                            title="Notre Vision"
                            description="Favoriser l'inclusion et la visibilité des enfants en situation de handicap dans le système éducatif et social. Démarrer au Sénégal avec une vision d'expansion régionale en Afrique de l'Ouest, pour créer un écosystème inclusif et bienveillant pour tous les enfants à besoins spécifiques."
                            bgGradient="from-white to-green-50"
                            iconBg="bg-green-500"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
