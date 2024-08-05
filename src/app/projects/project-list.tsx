import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type ProjectListProps = { projects: Project[] };

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
      {projects.map((project) => {
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
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="line-clamp-4 text-sm text-muted-foreground">
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
