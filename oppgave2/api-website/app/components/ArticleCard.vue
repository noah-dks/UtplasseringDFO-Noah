<template>
  <div class="flex flex-col w-3/4 border border-sky-200/20 p-5 gap-5">
    <h1 class = "text-lg font-bold">{{ props.article.title }}</h1>
    <p >{{ props.article.description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ article: NewsArticle }>();
</script>
