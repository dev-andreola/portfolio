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
          <h1 className="font-custom text-2xl font-semibold tracking-tighter">
            vt-code
          </h1>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
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
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-medium"
                  prefetch={false}
                >
                  <UserIcon className="h-5 w-5" />
                  About
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-medium"
                  prefetch={false}
                >
                  <FolderIcon className="h-5 w-5" />
                  Projects
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-medium"
                  prefetch={false}
                >
                  <MailIcon className="h-5 w-5" />
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
