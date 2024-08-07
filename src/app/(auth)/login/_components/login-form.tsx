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
import { UserRoundSearch } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type loginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: loginSchema) => {
    setIsLoading(true);

    const email = data.email;
    const password = data.password;

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      }).then((res) => {
        if (res && res.error === "CredentialsSignin") {
          toast.error("Login e/ou senha inválido(s)!");
          reset();
        }
        if (res && !res.error) {
          toast.success("Login efetuado com sucesso!");
        }
      });
    } catch (error) {
      toast.error("Ocorreu um erro inesperado!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-muted px-4">
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
          <form
            noValidate
            className="text-left"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  disabled={isLoading}
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="email@exemplo.com"
                />
                {errors.email && (
                  <span className="text-sm text-red-700">
                    <p className="text-left">{errors.email.message}</p>
                  </span>
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  disabled={isLoading}
                  {...register("password")}
                  type="password"
                  id="password"
                  placeholder="********"
                />
                {errors.password && (
                  <span className="text-sm text-red-700">
                    <p className="text-left">{errors.password.message}</p>
                  </span>
                )}
              </div>
            </div>

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
