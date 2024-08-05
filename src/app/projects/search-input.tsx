"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const searchString = e.currentTarget.value;

    if (searchString) {
      params.set("search", searchString);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-2/4 flex-1">
      <Input
        type="search"
        placeholder="Buscar projetos..."
        className="truncate rounded-md bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground"
        onChange={handleChange}
      />
    </div>
  );
}
