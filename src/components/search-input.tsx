"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSearch = useCallback(
    (searchString: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.has("page")) {
        params.delete("page");
      }

      if (searchString) {
        params.set("search", searchString);
      } else {
        params.delete("search");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace],
  );

  const debouncedSearch = useCallback(
    (searchString: string) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        handleSearch(searchString);
      }, 300);
    },
    [handleSearch],
  );

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="relative w-2/4 flex-1">
      <Input
        type="search"
        placeholder="Buscar..."
        className="truncate rounded-md bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground"
        onChange={(e) => debouncedSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
      <div className="absolute bottom-0 left-0 top-0 flex items-center justify-center px-4">
        <Search className="size-4 text-muted-foreground" />
      </div>
    </div>
  );
}
