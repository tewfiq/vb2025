export interface BlogPost {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  author: {
    name: string;
    avatar?: string;
  };
  date: string; // ISO format: YYYY-MM-DD
  readTime: number; // in minutes
  image: string; // path to cover image
  tags: string[];
  published: boolean;
}
