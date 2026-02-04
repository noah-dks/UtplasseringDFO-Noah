<template>
  <div class="grid grid-cols-4 gap-y-10 my-15 mx-6 justify-items-center">
    <ArticleCard
      v-for="article in data"
      :key="article.article_id"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
const data = await fetchNews("a");

if (!data) {
  throw new Error();
}
</script>