import {
  Select,
  SelectItem,
  SelectContent,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

export default function FilterDropdown() {
  return (
    <Select>
      <SelectTrigger className="truncate rounded-md bg-background px-4 py-2 text-sm text-foreground">
        <SelectValue placeholder="Filtrar por categoria" />
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
  );
}
