export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  note?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  categories: string[];
  readingTime: string;
  sections: ContentSection[];
};

export type HelpArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  updatedAt: string;
  keywords: string[];
  sections: ContentSection[];
};

export type HelpCategory = {
  slug: string;
  title: string;
  description: string;
};
