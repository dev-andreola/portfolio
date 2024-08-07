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
// import login from "../_actions/login";
import { UserRoundSearch } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useState } from "react";
export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    })
      .then((res) => {
        if (res && res.error === "CredentialsSignin") {
          setError("Login e/ou senha inválidos!");
        }
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="h-full bg-muted px-4 pt-12">
      <Card className="mx-auto max-w-96 shadow-shape">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <UserRoundSearch />
              <h1 className="text-lg">Login</h1>
            </div>
          </CardTitle>
          <CardDescription>Entre com email e senha</CardDescription>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <form className="text-left" onSubmit={handleSubmit}>
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
            {error && (
              <p className="mt-4 text-center text-sm text-red-700">{error}</p>
            )}
            <Button
              disabled={isLoading}
              size={"lg"}
              type="submit"
              className="mt-4 w-full"
            >
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
