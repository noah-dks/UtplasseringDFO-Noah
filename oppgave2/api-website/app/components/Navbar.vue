<template>
  <div class=" bg-slate-800/50 px-10 py-5 pt-10 w-full sticky">
    <div class="grid grid-cols-2 mx-10">
      <h1 class="flex text-3xl tracking-wide font-bold text-sky-100">
        Noah <span class="text-cyan-400">Nuxt</span>
      </h1>
      <ul class="text-lg text-sky-100/70 flex flex-row gap-10 justify-end">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact us</NuxtLink>
      </ul>
    </div>
  </div>
</template>
