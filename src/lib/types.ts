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
