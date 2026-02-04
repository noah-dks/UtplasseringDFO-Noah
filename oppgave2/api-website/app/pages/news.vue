<template>
    <div class="grid lg:grid-cols-3 3xl:grid-cols-4 gap-10  2xl:mx-20 my-15 mx-20 justify-items-center">
      <ArticleCard
        v-for="article in data"
        :key="article.article_id"
        :article="article"
        > 
    </ArticleCard>
</div>


</template>

<script setup lang="ts">
const data = await fetchNews("israel");

if (!data) {
  throw new Error();
}

</script>
