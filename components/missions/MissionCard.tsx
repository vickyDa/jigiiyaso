import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

interface MissionCardProps {
    icon: ReactNode
    title: string
    description: string
    bgGradient?: string
    iconBg?: string
}

export default function MissionCard({
                                        icon,
                                        title,
                                        description,
                                        bgGradient = 'from-white to-green-50',
                                        iconBg = 'bg-green-600',
                                    }: MissionCardProps) {
    return (
        <Card className={`h-full border-0 shadow-xl bg-gradient-to-br ${bgGradient}`}>
            <CardHeader>
                <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {icon}
                </div>
                <CardTitle className="text-2xl text-center text-green-800">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    )
}
