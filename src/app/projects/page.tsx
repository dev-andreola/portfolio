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
  return (
    <main className="bg-muted">
      <div className="container mx-auto max-w-6xl py-6 md:py-12">
        <div className="mb-8 flex items-center justify-between md:mb-10 lg:mb-12">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            My Projects
          </h1>
          <div className="flex items-center gap-4">
            <Input
              type="text"
              placeholder="Search projects..."
              className="rounded-md bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground"
            />
            <Select>
              <SelectTrigger className="rounded-md bg-background px-4 py-2 text-sm text-foreground">
                <SelectValue placeholder="Filter by category" />
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
          <Card>
            <Link href="#" className="block" prefetch={false}>
              <Image
                src={"/art.png"}
                alt="Project"
                width={300}
                height={400}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Project 1</h3>
                <p className="text-sm text-muted-foreground">
                  A web application for managing your tasks and projects.
                </p>
              </CardContent>
            </Link>
          </Card>
          <Card>
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 2"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Project 2</h3>
                <p className="text-sm text-muted-foreground">
                  A mobile app for tracking your fitness activities.
                </p>
              </CardContent>
            </Link>
          </Card>
          <Card>
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 3"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Project 3</h3>
                <p className="text-sm text-muted-foreground">
                  A design system for a SaaS product.
                </p>
              </CardContent>
            </Link>
          </Card>
          <Card>
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 4"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Project 4</h3>
                <p className="text-sm text-muted-foreground">
                  A web application for managing your personal finances.
                </p>
              </CardContent>
            </Link>
          </Card>
          <Card>
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 5"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Project 5</h3>
                <p className="text-sm text-muted-foreground">
                  A mobile app for booking appointments with local service
                  providers.
                </p>
              </CardContent>
            </Link>
          </Card>
          <Card>
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 6"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-md object-cover"
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Project 6</h3>
                <p className="text-sm text-muted-foreground">
                  A design system for a B2B SaaS product.
                </p>
              </CardContent>
            </Link>
          </Card>
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
