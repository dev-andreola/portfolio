import projects from "@/utils/projects.json";

import PageTitle from "@/components/page-title";
import ProjectItem from "./(components)/project-item";

export default async function Projects() {
  return (
    <main className="bg-muted">
      <div className="md:px-auto mx-auto max-w-6xl px-4 py-6 md:container md:py-12">
        <PageTitle title="Meus Projetos" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {projects.map((project) => {
            return <ProjectItem key={project.id} project={project} />;
          })}
        </div>

        {/* <div className="pt-12">
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
        </div> */}
      </div>
    </main>
  );
}
