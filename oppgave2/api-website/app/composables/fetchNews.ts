import type { NewsArticle } from "~~/shared/types/types";

export const fetchNews = async (search: string) => {
  // const limit = 10;
  // const offset = (page - 1) * limit;

  //   let order: string = "";

  //   if (sortingParam === "name") {
  //     order = "asc";
  //   } else {
  //     order = "desc";
  //   }
  const config = useRuntimeConfig();

  const { data } = await useFetch(
    `https://newsdata.io/api/1/latest?apikey=${config.public.apikey}&q=${search}&language=en`,
  );

  return data.value.results as NewsArticle[];
};
