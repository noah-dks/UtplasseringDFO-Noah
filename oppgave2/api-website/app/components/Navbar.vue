<template>
  <div class="bg-slate-800/50 px-10 py-5 pt-10 w-full sticky">
    <div class="grid grid-cols-2 mx-10">
      <NuxtLink
        to="/"
        class="flex text-3xl tracking-wide font-bold text-sky-100"
      >
        Noah <span class="text-cyan-400">Nuxt</span>
      </NuxtLink>
      <ul class="text-xl text-sky-100/70 flex flex-row gap-15 justify-end">
        <NuxtLink to="/news">News</NuxtLink>
        <NuxtLink to="/stats">Stats</NuxtLink>
      </ul>
    </div>
  </div>
</template>
