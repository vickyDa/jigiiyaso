import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const data = await req.json()

    try {
        const professional = await prisma.professional.create({
            data: {
                lastName: data.lastName,
                firstNames: data.firstNames,
                specialty: data.specialty,
                address: data.address,
                phone: data.phone,
                email: data.email,
            },
        })

        return NextResponse.json({ success: true, professional }, { status: 201 })
    } catch (error) {
        console.error('[API ERROR] create professional:', error)
        return NextResponse.json(
            { success: false, error: 'Erreur lors de l’enregistrement' },
            { status: 500 }
        )
    }
}
