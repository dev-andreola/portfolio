import { ProjectResponse } from "./types";

export async function fetchProjects({
  page = 1,
  search = "",
  tag = "",
}: {
  page: number;
  search: string;
  tag: string;
}): Promise<ProjectResponse> {
  const response = await fetch(
    `${process.env.BASE_URL}/api/projects?page=${page}&search=${search}&tag=${tag}`,
  );
  const data: ProjectResponse = await response.json();
  return data;
}
