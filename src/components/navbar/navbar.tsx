"use client";

import {
  FolderIcon,
  House,
  LampDesk,
  LogInIcon,
  LogOutIcon,
  MailIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ThemeToggle } from "./theme-toggle-button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Separator } from "../ui/separator";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { toast } from "sonner";

const navbarItem = [
  {
    title: "Projetos",
    href: "/projects",
    icon: FolderIcon,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: UserIcon,
  },
  {
    title: "Contato",
    href: "/contact",
    icon: MailIcon,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { data } = useSession();

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const handleLogoutClick = async () => {
    try {
      await signOut();
    } catch (error) {
      toast.error("Houve um erro inseperado!");
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-screen border-b bg-background shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-baseline gap-1 pt-1"
          prefetch={false}
        >
          <LampDesk strokeWidth={2} />
          <h2 className="font-custom text-2xl font-semibold tracking-tighter">
            vt-code
          </h2>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navbarItem.map((item) => (
            <Button
              asChild
              variant={pathname === item.href ? "outline" : "ghost"}
              key={item.title}
            >
              <Link
                href={item.href}
                className="text-sm font-medium"
                prefetch={false}
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <VisuallyHidden.Root></VisuallyHidden.Root>
                </SheetDescription>
              </SheetHeader>
              <nav className="grid gap-4 py-6">
                {data?.user ? (
                  <div className="flex justify-between pt-6">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={data?.user?.image as string | undefined}
                        />
                        <AvatarFallback>
                          {data?.user?.name?.split(" ")[0][0]}
                          {data?.user?.name?.includes(" ") &&
                            data?.user?.name?.split(" ")[1][0]}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold">{data?.user?.name}</h3>
                        <span className="block text-xs text-muted-foreground">
                          {data?.user?.email}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Olá. Faça seu login!</h2>
                    <Link href={"/api/auth/signin"} onClick={handleLinkClick}>
                      <Button size="icon">
                        <LogInIcon />
                      </Button>
                    </Link>
                  </div>
                )}

                <Separator />

                <Link href={"/"} prefetch={false} onClick={handleLinkClick}>
                  <Button
                    variant={pathname === "/" ? "default" : "ghost"}
                    className="flex w-full items-center justify-start gap-2 text-lg font-medium"
                  >
                    <House className="size-5" />
                    Início
                  </Button>
                </Link>
                {navbarItem.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    prefetch={false}
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant={pathname === item.href ? "default" : "ghost"}
                      className="flex w-full items-center justify-start gap-2 text-lg font-medium"
                    >
                      <item.icon className="size-5" />
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </nav>
              {data?.user && (
                <div>
                  <Separator className="mb-4" />
                  <Button
                    variant="ghost"
                    className="flex w-full items-center justify-start gap-2 text-lg font-medium"
                    onClick={handleLogoutClick}
                  >
                    <LogOutIcon className="size-5" />
                    <span className="block">Sair da conta</span>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
