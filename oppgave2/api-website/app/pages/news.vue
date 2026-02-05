<template>
  <div class="my-5 mx-20 justify-items-center">
    <h1 v-if="!route.query.search">
      Please enter a search term — the default is set to "global"
    </h1>
    <div
      class="grid lg:grid-cols-3 3xl:grid-cols-4 gap-10 2xl:mx-20 my-10"
    >
      <ArticleCard
        v-for="article in data"
        :key="article.article_id"
        :article="article"
      >
      </ArticleCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const search = computed(() => (route.query.search as string) || "global");
const validSearch = search.value;

const data = await fetchNews(validSearch);

if (!data) {
  throw new Error();
}
</script>
