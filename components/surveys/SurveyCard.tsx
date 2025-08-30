import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'

interface SurveyCardProps {
    icon: ReactNode
    title: string
    description: string
    content: string
    buttonColor?: string
    link?: string
}

export default function SurveyCard({
                                       icon,
                                       title,
                                       description,
                                       content,
                                       buttonColor = 'bg-green-600 hover:bg-green-700',
                                       link = '#',
                                   }: SurveyCardProps) {
    return (
        <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-green-100 to-white hover:shadow-2xl transition-shadow">
            <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {icon}
                </div>
                <CardTitle className="text-xl text-green-800">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{content}</p>
                <Button className={`w-full rounded-full ${buttonColor}`} asChild>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Participer à l'enquête
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}
