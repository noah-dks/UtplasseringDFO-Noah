import type { NewsArticle } from "~~/shared/types/types";

export const fetchArticleById = async (id: string | string[] | undefined): Promise<NewsArticle | null> => {
  const config = useRuntimeConfig();

  const { data } = await useFetch(
    `https://newsdata.io/api/1/latest?apikey=${config.public.apikey}&id=${id}`,
  );

  return data.value?.results?.[0];
};
