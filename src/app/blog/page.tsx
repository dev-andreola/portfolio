import PageTitle from "@/components/page-title";
import publications from "@/utils/publications.json";
import PublicationItem from "./(components)/publication-item";

export default function Blog() {
  return (
    <main className="bg-muted">
      <div className="md:px-auto mx-auto max-w-6xl px-4 py-6 md:container md:py-12">
        <PageTitle title="Minhas Publicações" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {publications.map((publication) => {
            return (
              <PublicationItem key={publication.id} publication={publication} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
