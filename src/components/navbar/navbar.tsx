"use client";

import {
  FolderIcon,
  LampDesk,
  MailIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ThemeToggle } from "./theme-toggle-button";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-background shadow-lg">
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
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="size-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 py-6">
                {navbarItem.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-2 text-lg font-medium"
                    prefetch={false}
                    onClick={handleLinkClick}
                  >
                    <item.icon className="size-5" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
