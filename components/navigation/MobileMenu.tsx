'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface MobileMenuProps {
    onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    const handleScrollToInscription = () => {
        onClose()
        document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" })
    }

    const links = [
        { href: "#home", label: "Accueil" },
        { href: "#mission", label: "Mission & Vision" },
        { href: "#temoignages", label: "Témoignages" },
        { href: "#enquetes", label: "Enquêtes" }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t border-gray-200 rounded-b-lg shadow-lg"
        >
            <div className="py-4 space-y-2">
                {links.map(({ href, label }) => (
                    <a
                        key={href}
                        href={href}
                        className="block text-green-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium px-4 py-3 rounded-lg mx-2"
                        onClick={onClose}
                    >
                        {label}
                    </a>
                ))}
                <div className="px-2 pt-2">
                    <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full"
                        onClick={handleScrollToInscription}
                    >
                        Rejoindre la communauté
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
