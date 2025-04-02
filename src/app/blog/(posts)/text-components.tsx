import { cn } from "@/lib/utils";
import { Pin } from "lucide-react";
import Image from "next/image";

export function BlogHeader({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) {
  return (
    <>
      <div className="relative h-40 w-full">
        <Image
          src={image}
          fill
          alt="Banner da postagem"
          className="rounded-t-xl object-cover"
        />
      </div>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Publicado em {date} por Vitor Andreola
      </p>
    </>
  );
}

export function BlogTitle({
  title,
  level,
  className,
}: {
  title: string;
  level?: number;
  className?: string;
}) {
  switch (level) {
    case 2:
      return (
        <h2 className={cn("text-2xl font-semibold", className)}>{title}</h2>
      );
    case 3:
      return (
        <h3 className={cn("text-xl font-semibold", className)}>{title}</h3>
      );
    case 4:
      return (
        <h4 className={cn("text-lg font-semibold", className)}>{title}</h4>
      );
    case 5:
      return (
        <h5 className={cn("text-base font-semibold", className)}>{title}</h5>
      );
    default:
      return (
        <h2 className={cn("text-2xl font-semibold", className)}>{title}</h2>
      );
  }
}

export function BlogHighlight({ children }: { children: React.ReactNode }) {
  return (
    <strong className="rounded-md bg-primary/10 px-1 py-0.5 font-normal">
      {children}
    </strong>
  );
}

export function BlogBlockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 rounded-md border-l-2 bg-background p-4 pl-6 italic">
      <p>
        <Pin className="mr-2 inline h-6 w-6 text-muted-foreground" />
        {children}
      </p>
    </blockquote>
  );
}

export function BlogList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6">{children}</ul>;
}

export function BlogListItem({ children }: { children: React.ReactNode }) {
  return <li className="mt-2">{children}</li>;
}

export function BlogNumberListItem({
  children,
  number,
}: {
  children: React.ReactNode;
  number: number;
}) {
  return (
    <li className="group flex items-center">
      <span className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-muted-foreground text-2xl font-bold text-primary-foreground shadow-md transition-transform group-hover:scale-110">
        {number}
      </span>
      <div>
        <p>{children}</p>
      </div>
    </li>
  );
}

export function BlogCode({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-md border bg-background p-4">
      <code className="font-code text-sm">{children}</code>
    </pre>
  );
}
