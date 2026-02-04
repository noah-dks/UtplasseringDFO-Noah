<template>
  <NuxtLink class="flex flex-col border w-95 3xl:w-150 border-sky-200/20 p-3 gap-3" :to="article.article_id">
    <img class = "rounded-sm grow ":src = image alt ="article coverimage"/>
    <h1 class = "text-lg font-bold">{{ props.article.title }}</h1>
  </NuxtLink>

</template>

<script setup lang="ts">
const props = defineProps<{ article: NewsArticle }>();
const image = props.article.image_url ?? "N/A";

</script>
