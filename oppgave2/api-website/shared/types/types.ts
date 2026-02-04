export interface Category {
  name: string;
}

export interface NewsArticle {
  article_id: string;
  category: Category[]
  country: string[]
  creator?: string[]
  description: string;
  fetched_at: Date;
  image_url: string;
  link: string;
  title: string;
}
