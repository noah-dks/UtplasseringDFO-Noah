export interface BareNewsArticle {
  article_id: string;
  category: string[];
  country: string[];
  creator?: string[];
  keywords?: string[];
  description: string;
  fetched_at: Date;
  image_url: string;
  link: string;
  title: string;
}
export interface NewsArticle {
  results: BareNewsArticle[];
}
