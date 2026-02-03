<template>
  <div>
    <ul>
      <li v-for="article in data">
        {{ article.title}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const data = await fetchNews("trump");

if (!data) {
  throw new Error();
}
</script>
