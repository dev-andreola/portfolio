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
import login from "../_actions/login";
import { UserRoundSearch } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function LoginForm() {
  return (
    <div className="h-full bg-muted px-4 pt-12">
      <Card className="mx-auto max-w-96 shadow-shape">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserRoundSearch />
            <h1 className="text-lg">Login</h1>
          </CardTitle>
          <CardDescription>Entre com email e senha</CardDescription>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <form action={login} className="text-left">
            <div className="space-y-4">
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
              Entrar
            </Button>
          </form>
          <Link
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "mx-auto mt-1 w-full text-center",
            )}
            href="/register"
          >
            Não possui conta?
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
