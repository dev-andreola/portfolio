import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectListProps = { projects: Project[] };

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
      {projects.map((project) => {
        return (
          <Link
            key={project.id}
            href={project.href}
            className="block"
            prefetch={false}
            target="_blank"
          >
            <Card className="hover-effect relative h-full shadow-shape">
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
                  <div className="flex gap-3">
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
          </Link>
        );
      })}
    </div>
  );
}
