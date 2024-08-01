import Footer from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const postList = [
    {
      title: "Masterizando React: Um Guia para Iniciantes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis facilis illo ullam, ut corporis placeat nulla, laudantium ratione iure aut facere harum et, magnam consequuntur consectetur incidunt ipsum! Quis?",
      href: "/",
      author: "Vitor Andreola",
      createdAt: "24 de Jul de 2024",
    },
    {
      title: "Como funciona o Next por baixo dos panos?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis facilis illo ullam, ut corporis placeat nulla, laudantium ratione iure aut facere harum et, magnam consequuntur consectetur incidunt ipsum! Quis?",
      href: "/",
      author: "Vitor Andreola",
      createdAt: "31 de Jul de 2024",
    },
  ];

  return (
    <div>
      <main className="border-b bg-muted">
        <div className="container mx-auto max-w-6xl py-6 md:py-12">
          <div className="mb-8 flex flex-col items-center justify-between space-y-2 md:mb-10 md:flex-row lg:mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Minhas Publicações
            </h1>
            <div className="flex w-full gap-4 md:w-auto">
              <div className="mx-auto flex w-full max-w-xl items-center gap-2">
                <div className="w-2/4 flex-1">
                  <Input
                    type="text"
                    placeholder="Buscar publicação..."
                    className="truncate rounded-md bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground"
                  />
                </div>
                <div className="w-2/4 flex-1">
                  <Select>
                    <SelectTrigger className="truncate rounded-md bg-background px-4 py-2 text-sm text-foreground">
                      <SelectValue placeholder="Filtrar por categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all" className="cursor-pointer">
                        Todos
                      </SelectItem>
                      <SelectItem value="web" className="cursor-pointer">
                        Web
                      </SelectItem>
                      <SelectItem value="mobile" className="cursor-pointer">
                        Mobile
                      </SelectItem>
                      <SelectItem value="design" className="cursor-pointer">
                        Design
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {postList.map((post) => {
              return (
                <Link href={post.href} key={post.title}>
                  <Card className="h-full shadow-shape">
                    <CardHeader>
                      <Image
                        src={"/art.png"}
                        width={800}
                        height={400}
                        alt="Blog Post Cover"
                        className="aspect-[2/1] rounded-t-lg object-cover"
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <UserIcon className="size-4" />
                          <span>{post.author}</span>
                          <CalendarIcon className="size-4" />
                          <span>{post.createdAt}</span>
                        </div>
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="line-clamp-4 text-muted-foreground">
                          {post.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
