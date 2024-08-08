import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ProjectListProps = { projects: Project[] };

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
      {projects.map((project) => {
        return (
          <Dialog key={project.id}>
            <DialogTrigger className="block">
              <Card className="hover-effect relative h-full text-left shadow-shape">
                <Image
                  src={project.imageUrl}
                  alt={`Thumbnail do projeto ${project.title}`}
                  width={300}
                  height={400}
                  className="h-28 w-full rounded-t-xl object-cover object-top"
                />
                <div className="absolute right-0 top-0">
                  <Badge
                    variant={"secondary"}
                    className="mr-2 mt-2 flex flex-row-reverse items-center gap-1 hover:bg-secondary"
                  >
                    <Star size={20} />
                    <span className="ml-1">22</span>
                  </Badge>
                </div>
                <CardContent className="space-y-1 p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="overflow-x-hidden pb-2">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => {
                        return (
                          <Badge
                            key={tag}
                            variant={"secondary"}
                            className="text-nowrap"
                          >
                            {tag}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {project.desc}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="pb-4">{project.title}</DialogTitle>
                <Image
                  src={project.imageUrl}
                  width={800}
                  height={400}
                  alt="Blog Post Cover"
                  className="aspect-[2/1] rounded-t-lg object-cover object-top"
                />
                <span className="flex gap-2 pb-[2px] pt-2">
                  {project.tags.map((tag) => {
                    return (
                      <Badge
                        variant={"secondary"}
                        className="text-nowrap"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </span>
                <DialogDescription className="mt-0 text-left">
                  {project.desc}
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-between gap-2">
                <Button asChild variant={"outline"} className="flex-1">
                  <Link prefetch={false} target="_blank" href={"/"}>
                    Repositório
                  </Link>
                </Button>

                <Button asChild className="flex-1">
                  <Link prefetch={false} target="_blank" href={project.href}>
                    Demo
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
