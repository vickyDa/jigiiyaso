import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const data = await req.json()

    try {
        const testimonial = await prisma.testimonial.create({
            data: {
                name: data.name,
                role: data.role || null,
                testimonial: data.testimonial,
            },
        })

        return NextResponse.json({ success: true, testimonial })
    } catch (err) {
        console.error('[POST testimonial]', err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}

export async function GET() {
    try {
        const testimonials = await prisma.testimonial.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return NextResponse.json({ success: true, testimonials })
    } catch (err) {
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
