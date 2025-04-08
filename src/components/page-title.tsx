import SearchInput from "@/components/search-input";
import FilterDropdown from "@/components/filter-dropdown";

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

          <FilterDropdown />
        </div>
      </div>
    </div>
  );
}
