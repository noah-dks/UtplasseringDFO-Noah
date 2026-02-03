export const fetchSearchedGames = async (
  search: string,
  page: number,
  sortingParam: string = "name",
) => {
  const limit = 8;
  const offset = (page - 1) * limit;

  let order: string = "";

  if (sortingParam === "name") {
    order = "asc";
  } else {
    order = "desc";
  }
  const config = useRuntimeConfig();

  const data = await useFetch(
    `http://www.omdbapi.com/?apikey=${config.public.apikey}&s=${search}&limit=${limit}`,
  );
};
