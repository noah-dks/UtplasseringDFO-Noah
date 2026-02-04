<template>
  <div class="flex flex-col min-h-[calc(100vh-13rem)]">
    <div class="flex flex-col items-center w-1/10 mt-5 mx-7">
      <UButton
        trailing-icon="i-lucide-arrow-left"
        size="xl"
        color="neutral"
        @click="goBack"
        >Back</UButton
      >
    </div>
    <div class="flex justify-center">
      <UBlogPost
        class="w-2/3 gap-4"
        :title="article.title"
        :date="article.fetched_at"
        :badge="{
          label: article.country ?? notFoundMsg,
          color: 'info',
        }"
        :description="article.description"
        :image="article.image_url"
        :authors?="authors"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

const goBack = () => {
  navigateTo("/news");
};

const article = await fetchArticleById(id);
if(!article){
  throw new Error
}
let authors;

if(article.creator){
    authors = article.creator.map((c) => ({
    description: "Main author",
    name: c,
  })) ?? " ";
}


const notFoundMsg = "N/A";
</script>
