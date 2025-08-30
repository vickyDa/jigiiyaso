'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/lib/animations'
import RegistrationTabs from './RegistrationTabs'

export default function RegistrationSection() {
    return (
        <motion.section
            id="inscription"
            className="py-20 px-4 bg-white/50"
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
                    Rejoignez notre communauté
                </motion.h2>
                <motion.div variants={fadeInUp}>
                    <RegistrationTabs />
                </motion.div>
            </div>
        </motion.section>
    )
}
