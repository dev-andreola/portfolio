export type Project = {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  imageUrl: string;
  href: string;
  repo?: string;
  createdAt: string;
};

export type ProjectResponse = {
  data: Project[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

export type Publication = {
  id: number;
  title: string;
  desc: string;
  image: string;
  href: string;
  author: string;
  createdAt: string;
};

export type Message = {
  name: string;
  email: string;
  message: string;
};
