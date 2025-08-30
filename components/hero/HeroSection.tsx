'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer'
import {slides} from "@/types/data-static/data";


export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 8000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="relative pt-20 pb-16 overflow-hidden">
            <div className="relative h-96 md:h-[600px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={slide.image || '/placeholder.svg'}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20">
                            <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-white mb-8"
                                >
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                                </motion.div>

                                {/* Countdown Timer */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                        Lancement officiel dans :
                                    </h2>
                                    <CountdownTimer />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
