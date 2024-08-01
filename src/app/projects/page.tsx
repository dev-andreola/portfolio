import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const projectList = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <main className="border-b bg-muted">
        <div className="container mx-auto max-w-6xl py-6 md:py-12">
          <div className="mb-8 flex flex-col items-center justify-between space-y-2 md:mb-10 md:flex-row lg:mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Meus Projetos
            </h1>
            <div className="flex w-full gap-4 md:w-auto">
              <div className="mx-auto flex w-full max-w-xl items-center gap-2">
                <div className="w-2/4 flex-1">
                  <Input
                    type="text"
                    placeholder="Buscar projetos..."
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
            {projectList.map((project) => {
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  className="block"
                  prefetch={false}
                  target="_blank"
                >
                  <Card className="h-full shadow-shape">
                    <Image
                      src={project.imageUrl}
                      alt={`Thumbnail do projeto ${project.title}`}
                      width={300}
                      height={400}
                      className="h-48 w-full rounded-t-xl object-cover object-top"
                    />
                    <CardContent className="p-4">
                      <h3 className="mb-2 text-lg font-semibold">
                        {project.title}
                      </h3>
                      <p className="line-clamp-4 text-sm text-muted-foreground">
                        {project.desc}
                      </p>
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
