import type { NewsArticle } from "~~/shared/types/types";

export const fetchNews = async (search: string) => {
  const config = useRuntimeConfig();

  const { data } = await useFetch<NewsArticle[]>(
    `https://newsdata.io/api/1/latest?apikey=${config.public.apikey}&qInTitle=${search}&language=en&removeduplicate=1`,
  );

  return data.value?.results;
};
