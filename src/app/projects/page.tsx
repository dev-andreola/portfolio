import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projectList = [
    {
      title: "Projeto 1",
      desc: "A web application for managing your tasks and projects.",
      href: "/",
    },
    {
      title: "Projeto 2",
      desc: "A mobile app for tracking your fitness activities.",
      href: "/",
    },
  ];

  return (
    <main className="bg-muted">
      <div className="container mx-auto max-w-6xl py-6 md:py-12">
        <div className="mb-8 flex items-center justify-between md:mb-10 lg:mb-12">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Meus Projetos
          </h1>
          <div className="flex items-center gap-4">
            <Input
              type="text"
              placeholder="Procurar projetos..."
              className="rounded-md bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground"
            />
            <Select>
              <SelectTrigger className="rounded-md bg-background px-4 py-2 text-sm text-foreground">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {projectList.map((project) => {
            return (
              <Card key={project.title}>
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src={"/art.png"}
                    alt="Project"
                    width={300}
                    height={400}
                    className="h-48 w-full rounded-t-md object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.desc}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
      <footer className="bg-background py-6 text-center text-sm text-foreground">
        <div className="container">
          &copy; 2024 vt-code. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
