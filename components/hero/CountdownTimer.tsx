'use client'

import { useState, useEffect } from 'react'
import {TimeLeft} from "@/types/time-left";
import {calculateTimeLeft} from "@/lib/utils";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    // Don't render anything until mounted (prevents hydration mismatch)
    if (!mounted || !timeLeft) {
        return (
            <div className="flex justify-center space-x-4 md:space-x-8">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="text-center">
                        <div className="bg-white/20 rounded-lg p-3 md:p-4 mb-2 min-w-[60px] md:min-w-[80px]">
                            <span className="text-2xl md:text-4xl font-bold text-white">--</span>
                        </div>
                        <span className="text-sm md:text-lg text-white">
                            {['Jours', 'Heures', 'Minutes', 'Secondes'][index]}
                        </span>
                    </div>
                ))}
            </div>
        )
    }

    const items = [
        { label: 'Jours', value: timeLeft.days },
        { label: 'Heures', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Secondes', value: timeLeft.seconds },
    ]

    return (
        <div className="flex justify-center space-x-4 md:space-x-8">
            {items.map(({ label, value }) => (
                <div key={label} className="text-center">
                    <div className="bg-white/20 rounded-lg p-3 md:p-4 mb-2 min-w-[60px] md:min-w-[80px]">
                        <span className="text-2xl md:text-4xl font-bold text-white">{value}</span>
                    </div>
                    <span className="text-sm md:text-lg text-white">{label}</span>
                </div>
            ))}
        </div>
    )
}