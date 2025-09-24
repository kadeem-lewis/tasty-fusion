<script setup lang="ts">
const { data } = await useAsyncData("landingPage", () => {
  return queryCollection("landingPage").first();
});
console.log(data.value);
</script>
<template>
  <div class="flex flex-col gap-8">
    <HeroSection :hero-data="data.hero" />
    <section id="popular" class="space-y-6">
      <h2 class="uppercase font-bold text-2xl text-center">Popular Dishes</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <PopularDishesCard v-for="i in 4" :key="i" />
      </div>
    </section>
    <section id="reviews"></section>
    <AboutUsSection :about-data="data.about" />
  </div>
</template>
