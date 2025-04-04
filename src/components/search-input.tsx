"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const searchString = e.currentTarget.value;

    if (params.has("page")) {
      params.delete("page");
    }

    if (searchString) {
      params.set("search", searchString);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative w-2/4 flex-1">
      <Input
        type="search"
        placeholder="Buscar..."
        className="truncate rounded-md bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground"
        onChange={handleChange}
        defaultValue={searchParams.get("search") || ""}
      />
      <div className="absolute bottom-0 left-0 top-0 flex items-center justify-center px-4">
        <Search className="size-4 text-muted-foreground" />
      </div>
    </div>
  );
}
