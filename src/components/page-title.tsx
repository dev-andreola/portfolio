import SearchInput from "@/components/search-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mx-auto mb-8 flex max-w-6xl flex-col items-center justify-between space-y-2 md:mb-10 md:flex-row lg:mb-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:mb-0 md:text-4xl">
        {title}
      </h1>
      <div className="flex w-full gap-4 md:w-auto">
        <div className="mx-auto flex w-full max-w-xl items-center gap-2">
          <SearchInput />

          <div className="w-2/4 flex-1">
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
          </div>
        </div>
      </div>
    </div>
  );
}
