import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function GET() {
  try {
    const [parents, professionals, schools, organizations] = await Promise.all([
      prisma.parent.count(),
      prisma.professional.count(),
      prisma.school.count(),
      prisma.organization.count(),
    ])

    return NextResponse.json({
      parents,
      professionals,
      schools,
      organizations,
    })
  } catch (error) {
    console.error("Erreur API /stats:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
