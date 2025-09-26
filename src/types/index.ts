export interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  tags: string[];
  content?: string;
  image?: string;
  publishedDate: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}
