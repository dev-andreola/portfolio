import { CalendarIcon } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Publication } from "@/lib/types";

type PublicationItemProps = {
  publication: Publication;
};

export default function PublicationItem({ publication }: PublicationItemProps) {
  return (
    <Link href={publication.href}>
      <Card className="h-full shadow-shape">
        <CardHeader>
          <Image
            src={publication.image}
            width={800}
            height={400}
            alt={publication.title}
            className="aspect-[2/1] rounded-t-lg object-cover"
          />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <UserIcon className="size-4" />
              <span>{publication.author}</span>
              <CalendarIcon className="size-4" />
              <span>{publication.createdAt}</span>
            </div>
            <h2 className="truncate text-2xl font-bold">{publication.title}</h2>
            <p className="line-clamp-4 text-muted-foreground">
              {publication.desc}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
