import Footer from "@/components/footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import axios from "axios";

import ProjectList from "./project-list";
import SearchInput from "./search-input";

export default async function Projects({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const response = await axios.get("https://vt-code.vercel.app/api/projects", {
    params: {
      search: searchParams?.search,
    },
  });
  const projects = response.data;

  return (
    <div>
      <main className="border-b bg-muted">
        <div className="md:px-auto mx-auto max-w-6xl px-4 py-6 md:container md:py-12">
          <div className="mx-auto mb-8 flex max-w-6xl flex-col items-center justify-between space-y-2 md:mb-10 md:flex-row lg:mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Meus Projetos
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

          <ProjectList projects={projects} />

          <div className="pt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
