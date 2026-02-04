import type { NewsArticle } from "~~/shared/types/types";

export const fetchArticleById = async (id: string): Promise<NewsArticle | null> => {
  const config = useRuntimeConfig();

  const { data } = await useFetch(
    `https://newsdata.io/api/1/latest?apikey=${config.public.apikey}&id=${id}`,
  );

  console.log(data.value?.results?.[0])
  return data.value?.results?.[0];
};
