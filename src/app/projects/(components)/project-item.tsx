"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  GitHubLogoIcon,
  LockClosedIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Dialog>
      <DialogTrigger className="block">
        <Card className="hover-effect relative h-full text-left shadow-shape">
          <Image
            src={project.imageUrl}
            alt={`Thumbnail do projeto ${project.title}`}
            width={300}
            height={400}
            className="h-36 w-full rounded-t-xl object-cover object-top md:h-28"
          />
          <div className="absolute right-0 top-0"></div>
          <CardContent className="space-y-1 p-4">
            <h3 className="truncate text-lg font-semibold">{project.title}</h3>
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
      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle className="pb-4">{project.title}</DialogTitle>
          <Image
            src={project.imageUrl}
            width={800}
            height={400}
            alt="Blog Post Cover"
            className="aspect-[2/1] rounded-t-lg object-cover object-top"
          />
          <span className="flex flex-wrap gap-2 pb-[2px] pt-2">
            {project.tags.map((tag) => {
              return (
                <Badge variant={"secondary"} className="text-nowrap" key={tag}>
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
          <Button
            variant={"outline"}
            className="flex-1"
            onClick={() => {
              window.open(project.repo, "_blank");
            }}
            disabled={!project.repo}
          >
            <div className="flex items-center gap-2">
              {project.repo ? (
                <GitHubLogoIcon className="size-4" />
              ) : (
                <LockClosedIcon className="size-4" />
              )}
              <span>Repositório</span>
            </div>
          </Button>

          <Button asChild className="flex-1">
            <Link prefetch={false} target="_blank" href={project.href}>
              <div className="flex items-center gap-2">
                <span>Demo</span>
                <ExternalLinkIcon className="size-4" />
              </div>
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
