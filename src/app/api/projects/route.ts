import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching projects" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const { title, desc, imageUrl, href } = await req.json();
    const newProject = await prisma.project.create({
      data: { title, desc, imageUrl, href },
    });
    return NextResponse.json(newProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching projects" },
      { status: 500 },
    );
  }
}
