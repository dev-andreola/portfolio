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
import registerAction from "../_actions/register-action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Insira um nome válido")
    .max(26, "Nome não pode ter mais de 26 caracteres"),
  email: z.string().email("Insira um email válido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type registerSchema = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: registerSchema) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      await registerAction(formData).then(() => {
        console.log("SUCCESS!");

        toast.success("Cadastro feito com sucesso!", {
          description: "Utilize as suas credenciais na página de login.",
        });
        router.push("/");
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.warning("Esse email já está registrado!");
        console.error(error.message);
      } else {
        toast.warning("Ocorreu um erro inesperado.");
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full px-4">
      <Card className="mx-auto max-w-96 shadow-shape">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <UserPlus />
              <h1 className="text-lg">Cadastre-se</h1>
            </div>
          </CardTitle>
          <CardDescription>Crie uma conta gratuitamente</CardDescription>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="text-left"
          >
            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  placeholder="Fulano de Tal"
                  {...register("name")}
                  disabled={isLoading}
                />
                {errors.name && (
                  <span className="text-sm text-destructive">
                    <p className="text-left">{errors.name.message}</p>
                  </span>
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="email@exemplo.com"
                  {...register("email")}
                  disabled={isLoading}
                />
                {errors.email && (
                  <span className="text-sm text-destructive">
                    <p className="text-left">{errors.email.message}</p>
                  </span>
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  type="password"
                  placeholder="********"
                  {...register("password")}
                  disabled={isLoading}
                />
                {errors.password && (
                  <span className="text-sm text-destructive">
                    <p className="text-left">{errors.password.message}</p>
                  </span>
                )}
              </div>
            </div>
            <Button
              size={"lg"}
              disabled={isLoading}
              type="submit"
              className="mt-4 w-full"
            >
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
