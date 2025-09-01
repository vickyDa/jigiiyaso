"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Building2, Mail, Phone, MapPin, Shield } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
          <div className="flex items-center h-24 px-4">
            <img
              src="/images/logo-js.png"
              alt="Jigiya Sô Logo"
              className="h-24 sm:h-28 w-auto max-w-[220px]"
            />
          </div>

            <Link href="/">
              <Button
                variant="outline"
                className="rounded-2xl border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Mentions légales</h1>
            <p className="text-xl text-gray-600">Informations légales concernant le site Jigiya So</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Éditeur du site */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Building2 className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Éditeur du site</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Jigiya So</h3>
                    <p className="mb-2">Plateforme d'accompagnement pour enfants à besoins spécifiques</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-green-600 mr-2" />
                      <span>Dakar, Sénégal</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-green-600 mr-2" />
                      <a href="mailto:contact@jigiyaso.com" className="text-green-600 hover:text-green-700">
                        jigiyaso.lme@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-green-600 mr-2" />
                      <span>+221 77 745 32 04</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

      
            {/* Propriété intellectuelle */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    L'ensemble du contenu du site Jigiya Sô est la propriété exclusive de Jigiya So, sauf mentions contraires.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle des
                    éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation
                    écrite préalable de Jigiya So.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
                    <p className="text-amber-800">
                      <strong>Important :</strong> Le non-respect de cette interdiction constitue une contrefaçon
                      pouvant engager la responsabilité civile et pénale du contrefacteur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    L'éditeur du site Jigiya Sô s'efforce de fournir des informations fiables et à jour.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Les présentes mentions légales sont régies par le droit sénégalais. En cas de litige, les tribunaux
                    sénégalais seront seuls compétents.
                  </p>
                  <p>
                    Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse :
                    <a href="mailto:legal@jigiyaso.com" className="text-green-600 hover:text-green-700 ml-1">
                      jigiyaso.lme@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dernière mise à jour */}
            <Card className="border-0 shadow-xl rounded-3xl bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <p className="text-green-800 font-medium">Dernière mise à jour : Août 2025</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl px-8 py-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
