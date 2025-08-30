import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const body = await req.json()

    try {
        const organization = await prisma.organization.create({
            data: {
                organizationName: body.organizationName,
                organizationType: body.organizationType,
                address: body.address,
                phone: body.phone,
                email: body.email,
                manager: body.manager || null,
            },
        })

        return NextResponse.json({ success: true, organization }, { status: 201 })
    } catch (error) {
        console.error('Erreur création organisme :', error)
        return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
    }
}
