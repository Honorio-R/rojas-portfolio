export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  webURL: string;
  iosURL: string;
  androidURL: string;
  apkURL: string;
  image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}