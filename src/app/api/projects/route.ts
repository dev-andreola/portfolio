import { NextResponse } from "next/server";
import projects from "@/constants/projects.json";

const ITEMS_PER_PAGE = 8;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get("page") || "1"));
    const search = searchParams.get("search") || "";

    // Filter projects based on search term
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    );

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

    // Validate page number
    if (page > totalPages) {
      return NextResponse.json(
        { error: "Page number exceeds total pages" },
        { status: 400 },
      );
    }

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const data = filteredProjects.slice(startIndex, endIndex);

    const links = {
      first: `${process.env.BASE_URL}/projects?page=1&search=${search}`,
      last: `${process.env.BASE_URL}/projects?page=${totalPages}&search=${search}`,
      prev:
        page > 1
          ? `${process.env.BASE_URL}/projects?page=${page - 1}&search=${search}`
          : null,
      next:
        page < totalPages
          ? `${process.env.BASE_URL}/projects?page=${page + 1}&search=${search}`
          : null,
    };

    const meta = {
      current_page: page,
      from: startIndex + 1,
      last_page: totalPages,
      path: `${process.env.BASE_URL}/projects?search=${search}`,
      per_page: ITEMS_PER_PAGE,
      to: startIndex + data.length,
      total: projects.length,
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
