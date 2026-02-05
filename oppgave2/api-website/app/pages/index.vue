<template>
  <div
    class="flex flex-col gap-5 justify-center items-center min-h-[calc(100vh-13rem)]"
  >
    <h1 class="text-5xl text-center">
      Type a keyword to see corresponding news:
    </h1>
    <p>This is a crucial step, to read why please head over to the "About" page</p>
    <template class="flex flex-row gap-2 mt-5" >
      <UInput v-model="searchTerm" placeholder="Search..." />
      <UButton
        icon="i-lucide-search"
        size="md"
        color="primary"
        variant="solid"
        @click="sendPropToNews"
    /></template>
  </div>
</template>

<script setup lang="ts">
const searchTerm = ref('')

const sendPropToNews = () => {
  navigateTo({
    path: '/news',
    query: {
      search: searchTerm.value
    }
  })
}
</script>
