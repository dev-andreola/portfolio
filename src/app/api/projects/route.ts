import { NextResponse } from "next/server";
import projects from "@/constants/projects.json";

const ITEMS_PER_PAGE = 8;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, Number(searchParams.get("page") || "1"));
    const search = searchParams.get("search") || "";
    const tag = searchParams.get("tag") || "";

    // Filtro inicial pelo termo de busca
    let filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    );

    // Aplicar filtro de tag se existir e não for 'all'
    if (tag && tag !== "all") {
      filteredProjects = filteredProjects.filter((project) =>
        project.tags.some(
          (projectTag) => projectTag.toLowerCase() === tag.toLowerCase(),
        ),
      );
    }

    // Calcular total de páginas após todos os filtros
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

    // Validar número da página
    if (page > totalPages) {
      return NextResponse.json(
        { error: "Page number exceeds total pages" },
        { status: 400 },
      );
    }

    // Paginação
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const data = filteredProjects.slice(startIndex, endIndex);

    // Gerar links
    const baseUrl = `${process.env.BASE_URL}/projects`;
    const queryParams = `search=${encodeURIComponent(search)}&tag=${encodeURIComponent(tag)}`;

    const links = {
      first: `${baseUrl}?page=1&${queryParams}`,
      last: `${baseUrl}?page=${totalPages}&${queryParams}`,
      prev: page > 1 ? `${baseUrl}?page=${page - 1}&${queryParams}` : null,
      next:
        page < totalPages ? `${baseUrl}?page=${page + 1}&${queryParams}` : null,
    };

    const meta = {
      current_page: page,
      from: startIndex + 1,
      last_page: totalPages,
      path: `${baseUrl}?${queryParams}`,
      per_page: ITEMS_PER_PAGE,
      to: startIndex + data.length,
      total: filteredProjects.length, // Usar o total filtrado
    };

    return NextResponse.json({ data, links, meta });
  } catch (error) {
    console.error("Error in projects API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
