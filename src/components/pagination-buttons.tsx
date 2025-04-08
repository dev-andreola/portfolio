import {
  PaginationContent,
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  Pagination,
  PaginationNext,
} from "./ui/pagination";
import { ProjectResponse } from "@/lib/types";
export default function PaginationButtons({
  res,
  searchParams,
}: {
  res: ProjectResponse;
  searchParams: { page: number; search: string };
}) {
  const search = searchParams.search;

  return (
    <div className="pt-12">
      {res.meta?.last_page > 1 && (
        <Pagination>
          <PaginationContent>
            {res.links?.prev && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/projects?page=${res.meta.current_page - 1}${
                    search ? `&search=${search}` : ""
                  }`}
                />
              </PaginationItem>
            )}
            {Array.from({ length: res.meta?.last_page }, (_, i) => i + 1).map(
              (pageNum) => (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href={`/projects?page=${pageNum}${
                      search ? `&search=${search}` : ""
                    }`}
                    isActive={pageNum === res.meta.current_page}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
            {res.links?.next && (
              <PaginationItem>
                <PaginationNext
                  href={`/projects?page=${res.meta.current_page + 1}${
                    search ? `&search=${search}` : ""
                  }`}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
