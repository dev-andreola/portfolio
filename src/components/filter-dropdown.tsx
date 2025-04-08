"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function FilterDropdown() {
  const [filterStatus, setFilterStatus] = useState("all");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChangeFilter(value: string) {
    setFilterStatus(value);

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.delete("page");
      if (value === "all") {
        params.delete("tag");
      } else {
        params.set("tag", value);
      }
    } else {
      params.delete("tag");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"default"}
          className="flex w-36 gap-2 text-muted-foreground"
        >
          <Filter className="size-4" />
          {filterStatus === "all" ? "Filtrar" : filterStatus}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={filterStatus}
          onValueChange={handleChangeFilter}
        >
          <DropdownMenuRadioItem value="all">Todos</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="TypeScript">
            TypeScript
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="JavaScript">
            JavaScript
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="React">React</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Next.js">Next.js</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
