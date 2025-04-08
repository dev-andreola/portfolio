import PageTitle from "@/components/page-title";
import ProjectItem from "./(components)/project-item";
import { fetchProjects } from "@/lib/projects";
import { Project } from "@/lib/types";
import PaginationButtons from "@/components/pagination-buttons";

export default async function Projects({
  searchParams,
}: {
  searchParams: { page: number; search: string; tag: string };
}) {
  const res = await fetchProjects({
    page: searchParams.page,
    search: searchParams.search,
    tag: searchParams.tag,
  });

  const projects: Project[] = res.data;

  return (
    <main className="bg-muted">
      <div className="md:px-auto mx-auto max-w-6xl px-4 py-6 md:container md:py-12">
        <PageTitle title="Meus Projetos" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {!projects && (
            <div className="col-span-full mt-16 flex items-center justify-center">
              <p className="text-muted-foreground">Nenhum projeto encontrado</p>
            </div>
          )}
          {projects &&
            projects.map((project) => {
              return <ProjectItem key={project.id} project={project} />;
            })}
        </div>

        <PaginationButtons res={res} searchParams={searchParams} />
      </div>
    </main>
  );
}
