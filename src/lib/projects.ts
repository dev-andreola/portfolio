import { ProjectResponse } from "./types";

export async function fetchProjects({
  page = 1,
  search = "",
}: {
  page: number;
  search: string;
}): Promise<ProjectResponse> {
  const response = await fetch(
    `${process.env.BASE_URL}/api/projects?page=${page}&search=${search}`,
  );
  const data: ProjectResponse = await response.json();
  return data;
}
