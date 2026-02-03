<template>
  <div v-for="article in data">
    <ArticleCard :article="article" :key="article.article_id" />
  </div>
</template>

<script setup lang="ts">
const data = await fetchNews("trump");

if (!data) {
  throw new Error();
}

</script>
