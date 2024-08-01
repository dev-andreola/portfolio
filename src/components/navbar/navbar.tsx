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

const navbarItem = [
  {
    title: "Projetos",
    href: "#",
    icon: FolderIcon,
  },
  {
    title: "Blog",
    href: "#",
    icon: UserIcon,
  },
  {
    title: "Contato",
    href: "#",
    icon: MailIcon,
  },
];

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="#"
          className="flex items-baseline gap-1 pt-1"
          prefetch={false}
        >
          <LampDesk strokeWidth={2} />
          <h2 className="font-custom text-2xl font-semibold tracking-tighter">
            vt-code
          </h2>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navbarItem.map((item) => {
            return (
              <Button variant={"ghost"} key={item.title}>
                <Link
                  href={item.href}
                  className="text-sm font-medium"
                  prefetch={false}
                >
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="size-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden">
              <nav className="grid gap-4 py-6">
                {navbarItem.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-2 text-lg font-medium"
                      prefetch={false}
                    >
                      <item.icon className="size-5" />
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
