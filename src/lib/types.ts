export type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  imageUrl: string;
  href: string;
  repo: string;
  createdAt: string;
};

export type Post = {
  title: string;
  desc: string;
  image: string;
};

export type Message = {
  name: string;
  email: string;
  message: string;
};
