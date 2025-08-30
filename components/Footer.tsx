'use client';
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useEffect, useState} from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2025);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer className="bg-green-900 text-white py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/logo-js-white.png"
                                alt="Jigiya Sô Logo"
                                className="h-20 w-36"
                            />
                        </div>
                        <p className="text-green-200 mb-4">
                            Accompagner chaque pas de nos enfants extraordinaires au Sénégal et en Afrique de l'Ouest
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-green-200">
                            <li>Annuaire des professionnels</li>
                            <li>Écoles spécialisées</li>
                            <li>Organismes d'accompagnement</li>
                            <li>Communauté de parents</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-green-200">
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>jigiyaso.lme@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>+221 77 745 32 04</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>Dakar, Sénégal</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-green-200 mb-4">Restez informé de nos actualités</p>
                        <div className="flex">
                            <Input
                                type="email"
                                placeholder="Votre email"
                                className="rounded-l-full border-green-700 bg-green-800 text-white placeholder-green-300"
                            />
                            <Button className="rounded-r-full bg-green-600 hover:bg-green-700">
                                <Mail className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
                    <p>&copy; {currentYear} Jigiya Sô. Tous droits réservés.</p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-white transition-colors">
                            Mentions légales
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Politique de confidentialité
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
