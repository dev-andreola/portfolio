"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/utils";
import register from "../_actions/register";
import { UserPlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function RegisterForm() {
  return (
    <div className="mt-12 h-full">
      <Card className="mx-auto max-w-96 shadow-shape">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus />
            <h1 className="text-lg">Cadastre-se</h1>
          </CardTitle>
          <CardDescription>Crie uma conta gratuitamente</CardDescription>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <form action={register} className="text-left">
            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input
                  name="name"
                  type="name"
                  id="name"
                  placeholder="Fulano de Tal"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>
            <Button size={"lg"} type="submit" className="mt-4 w-full">
              Registrar
            </Button>
          </form>
          <Link
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "mx-auto mt-1 w-full text-center",
            )}
            href="/login"
          >
            Já possui conta?
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
