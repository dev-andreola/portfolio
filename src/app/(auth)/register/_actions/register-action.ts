"use server";
import db from "@/lib/prisma";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function registerAction(FormData: FormData) {
  const name = FormData.get("name") as string;
  const email = FormData.get("email") as string;
  const password = FormData.get("password") as string;

  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new Error("Esse email já está registrado!");
  }

  await db.user.create({
    data: {
      email: email,
      name: name,
      password: hashSync(password),
    },
  });

  redirect("/");
}
