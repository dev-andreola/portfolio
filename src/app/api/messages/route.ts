import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Message from "@/models/Message";

export async function GET() {
  try {
    await dbConnect();

    const messages = await Message.find();

    return NextResponse.json({ data: messages }, { status: 200 });
  } catch (error) {
    console.error("Error creating message:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    // Conectar ao banco de dados
    await dbConnect();

    // Obter dados do corpo da requisição
    const { name, email, message } = await request.json();

    // Validar campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    // Criar nova mensagem
    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { message: "Message created successfully", data: newMessage },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating message:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
