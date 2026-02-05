<template>
  <div class="flex flex-col min-h-[calc(100vh-13rem)]">
    <div class="flex flex-col items-center w-1/10 mt-5 mx-13">
      <UButton
        trailing-icon="i-lucide-arrow-left"
        size="xl"
        color="neutral"
        @click="goBack"
        >Back</UButton
      >
    </div>
    <div class="flex flex-wrap justify-center mb-20">
      <UBlogPost
        class="w-3/5 gap-4"
        :title="article.title"
        :date="article.fetched_at"
        :description="article.description"
        :image="article.image_url"
        :authors="authors"
      >
        <template #badge>
          <UBadge
            v-for="c in article.category"
            :label="c"
            color="info"
            class="mr-1 text-md"
          />
        </template>
      </UBlogPost>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

const goBack = () => {
  const from = route.query.from as string | undefined;
  navigateTo(from || "/news");
};
const article = await fetchArticleById(id);
if (!article) {
  throw new Error();
}

const authors = article.creator?.map((c) => ({
  description: "Main author",
  name: capitalizeFirstLetter(c),
})) ?? [{ name: "Author not found" }];
</script>
