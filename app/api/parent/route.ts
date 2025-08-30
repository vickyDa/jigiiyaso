import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const body = await req.json()

    try {
        const parent = await prisma.parent.create({
            data: {
                lastName: body.lastName,
                firstNames: body.firstNames,
                address: body.address,
                phone: body.phone,
                email: body.email,
                childrenCount: body.childrenCount || null,
            },
        })

        return NextResponse.json({ success: true, parent }, { status: 201 })
    } catch (error) {
        console.error('Erreur création organisme :', error)
        return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
    }
}

