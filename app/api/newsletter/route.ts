import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Vérifier si déjà inscrit
    const exists = await prisma.newsletter.findUnique({ where: { email } });
    if (exists) {
      return NextResponse.json({ error: "Déjà inscrit" }, { status: 400 });
    }

    // Enregistrer dans la BDD
    await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
