'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasStats, setHasStats] = useState(false)

  const handleScrollToInscription = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/stats")
        const data = await res.json()

        if (
          data.parents > 0 ||
          data.professionals > 0 ||
          data.schools > 0 ||
          data.organizations > 0
        ) {
          setHasStats(true)
        }
      } catch (err) {
        console.error("Erreur stats:", err)
      }
    }

    fetchStats()
  }, [])

  // Tableau des liens
  const links = [
    { href: "#home", label: "Accueil" },
    { href: "#mission", label: "Mission & Vision" },
    hasStats ? { href: "#statistiques", label: "Statistiques" } : null,
    { href: "#testimonial", label: "Témoignages" },
    { href: "#survey", label: "Enquêtes" }
  ]

  // Filter pour enlever les null et informer TypeScript
  const filteredLinks = links.filter(
    (link): link is { href: string; label: string } => link !== null
  )

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center h-24 px-4">
            <img
              src="/images/logo-js.png"
              alt="Jigiya Sô Logo"
              className="h-24 sm:h-28 w-auto max-w-[220px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {filteredLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-green-700 hover:text-green-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-green-50"
              >
                {label}
              </a>
            ))}

            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
              onClick={handleScrollToInscription}
            >
              Rejoindre
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-green-700 p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </nav>
  )
}