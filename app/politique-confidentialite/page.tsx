"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Database, Clock, Users, Lock, Eye, Mail, Cookie, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PolitiqueConfidentialitePage() {
  const dataTypes = [
    "Nom et prénom",
    "Adresse email",
    "Numéro de téléphone",
    "Spécialité (pour les professionnels)",
    "Adresse postale",
    "Informations sur les enfants (avec consentement)",
  ]

  const purposes = [
    "Permettre l'inscription et la mise en relation avec la communauté Jigiya Sô",
    "Répondre aux demandes de contact et d'assistance",
    "Améliorer les services proposés sur la plateforme",
    "Respecter les obligations légales et réglementaires",
    "Assurer la sécurité et la modération de la plateforme",
  ]

  const rights = [
    { name: "Droit d'accès", description: "Obtenir une copie de vos données personnelles" },
    { name: "Droit de rectification", description: "Corriger des données inexactes ou incomplètes" },
    { name: "Droit d'effacement", description: "Demander la suppression de vos données" },
    { name: "Droit de limitation", description: "Limiter le traitement de vos données" },
    { name: "Droit d'opposition", description: "Vous opposer au traitement de vos données" },
    { name: "Droit à la portabilité", description: "Récupérer vos données dans un format structuré" },
  ]

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
        <motion.div initial="initial" animate="animate" variants={staggerChildren} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-gray-600">Comment nous protégeons et utilisons vos données personnelles</p>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-4">Conforme au RGPD</Badge>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={fadeInUp}>
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
                  <p className="text-green-800 leading-relaxed">
                    <strong>Chez Jigiya Sô</strong>, nous nous engageons à protéger votre vie privée et vos données
                    personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos
                    informations lorsque vous utilisez notre plateforme d'accompagnement pour enfants à besoins
                    spécifiques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            {/* Collecte des données */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Database className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Collecte des données personnelles</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Lors de l'utilisation du site Jigiya Sô, nous pouvons collecter les données suivantes :
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {dataTypes.map((dataType, index) => (
                        <div key={index} className="flex items-center p-3 bg-green-50 rounded-xl">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{dataType}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl mt-4">
                      <p className="text-blue-800">
                        <strong>Important :</strong> Nous ne collectons que les données strictement nécessaires au
                        fonctionnement de notre service et avec votre consentement explicite.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Finalité de la collecte */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Finalité de la collecte</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">Ces données sont collectées afin de :</p>
                    <div className="space-y-3">
                      {purposes.map((purpose, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-green-600 text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{purpose}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Durée de conservation */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Durée de conservation</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Les données sont conservées pour la durée nécessaire aux finalités décrites ci-dessus, et au
                      maximum <strong>3 ans après le dernier contact</strong> ou la fermeture de votre compte.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-xl">
                        <h4 className="font-semibold text-green-800 mb-2">Comptes actifs</h4>
                        <p className="text-green-700 text-sm">Données conservées tant que le compte est actif</p>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-xl">
                        <h4 className="font-semibold text-amber-800 mb-2">Comptes inactifs</h4>
                        <p className="text-amber-700 text-sm">Suppression automatique après 3 ans d'inactivité</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Partage des données */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Partage des données</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-2xl">
                      <p className="text-red-800 font-semibold">
                        ❌ Les données collectées ne sont <strong>jamais vendues</strong> à des tiers.
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Elles peuvent être transmises uniquement à des prestataires techniques ou partenaires strictement
                      nécessaires au fonctionnement du service, tels que :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-semibold text-blue-800 mb-2">Hébergement</h4>
                        <p className="text-blue-700 text-sm">Serveurs sécurisés pour le stockage des données</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl">
                        <h4 className="font-semibold text-purple-800 mb-2">Services techniques</h4>
                        <p className="text-purple-700 text-sm">Outils d'analyse et de maintenance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sécurité des données */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Lock className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Sécurité des données</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer
                      la sécurité et la confidentialité des données personnelles :
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 rounded-xl text-center">
                        <Lock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-green-800 mb-1">Chiffrement</h4>
                        <p className="text-green-700 text-sm">SSL/TLS pour tous les échanges</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl text-center">
                        <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-blue-800 mb-1">Protection</h4>
                        <p className="text-blue-700 text-sm">Pare-feu et systèmes de sécurité</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl text-center">
                        <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-purple-800 mb-1">Surveillance</h4>
                        <p className="text-purple-700 text-sm">Monitoring 24h/24</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Droits des utilisateurs */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Vos droits (RGPD)</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits
                      suivants :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {rights.map((right, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-2">{right.name}</h4>
                          <p className="text-gray-600 text-sm">{right.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Pour exercer ces droits
                      </h4>
                      <p className="text-green-700">
                        Contactez-nous à :
                        <a href="mailto:jigiyaso.lme@gmail.com" className="font-semibold hover:underline ml-1">
                        jigiyaso.lme@gmail.com
                        </a>
                      </p>
                      <p className="text-green-600 text-sm mt-2">
                        Nous nous engageons à répondre dans un délai maximum de 30 jours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Cookie className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Le site Jigiya Sô utilise des cookies afin d'améliorer l'expérience utilisateur et de réaliser des
                      statistiques de fréquentation.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 rounded-xl">
                        <h4 className="font-semibold text-green-800 mb-2">Cookies essentiels</h4>
                        <p className="text-green-700 text-sm">Nécessaires au fonctionnement du site</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-semibold text-blue-800 mb-2">Cookies analytiques</h4>
                        <p className="text-blue-700 text-sm">Statistiques d'utilisation anonymes</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl">
                        <h4 className="font-semibold text-purple-800 mb-2">Cookies préférences</h4>
                        <p className="text-purple-700 text-sm">Mémorisation de vos choix</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h2 className="text-2xl font-bold mb-4">Des questions sur vos données ?</h2>
                  <p className="mb-6 opacity-90">
                    Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la protection
                    de vos données personnelles.
                  </p>
                  <a
                    href="mailto:jigiyaso.lme@gmail.com"
                    className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    jigiyaso.lme@gmail.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Dernière mise à jour */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl rounded-3xl bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <p className="text-green-800 font-medium">Dernière mise à jour de cette politique : Août 2025</p>
                  <p className="text-green-600 text-sm mt-2">
                    Nous vous informerons de toute modification importante par email.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl px-8 py-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
