import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const data = await req.json()

    try {
        const school = await prisma.school.create({
            data: {
                schoolName: data.schoolName,
                schoolType: data.schoolType,
                address: data.address,
                phone: data.phone,
                email: data.email,
                manager: data.manager || null,
            },
        })

        return NextResponse.json({ success: true, school }, { status: 201 })
    } catch (error) {
        console.error('[API ERROR] create school:', error)
        return NextResponse.json(
            { success: false, error: 'Erreur lors de l’enregistrement' },
            { status: 500 }
        )
    }
}
