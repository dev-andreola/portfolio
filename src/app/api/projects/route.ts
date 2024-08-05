import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const search = searchParams.get("search") || "";
    const pageSize = 8;

    const projects = await prisma.project.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

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
      { error: "Error updating project " + error },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, desc, imageUrl, tags, href } = await request.json();
    const updatedProject = await prisma.project.update({
      where: { id },
      data: { title, desc, imageUrl, href, tags },
    });
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating project " + error },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.project.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting project" },
      { status: 500 },
    );
  }
}
