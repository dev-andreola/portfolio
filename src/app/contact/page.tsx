import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 md:px-6">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Entre em Contato</h1>
          <p className="text-muted-foreground">
            Tem alguma pergunta ou quer trabalhar conosco? Preencha o formulário
            abaixo ou entre em contato nas mídias sociais.
          </p>
        </div>
        <Card className="pt-6">
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Vitor Andreola" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@exemplo.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" rows={4} placeholder="Sua mensagem..." />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </CardFooter>
        </Card>
        <div className="flex justify-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            <FaXTwitter className="size-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            <SiLinkedin className="size-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            <SiGithub className="size-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
