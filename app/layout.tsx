import './globals.css'
import type {Metadata} from 'next'
import {Toaster} from 'sonner'

export const metadata: Metadata = {
    title: 'Jigiya SÔ',
    description: 'Plateforme de recensement des organismes'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <head/>
        <body className="font-sans antialiased bg-white text-gray-900">
        <Toaster richColors position="top-right"/>
        {children}
        </body>
        </html>
    )
}
