<script setup lang="ts">
const { data } = await useAsyncData("landingPage", () => {
  return queryCollection("landingPage").first();
});
console.log(data.value);
</script>
<template>
  <div class="flex flex-col gap-8">
    <HeroSection :hero-data="data.hero" />

    <section id="reviews"></section>
    <AboutUsSection :about-data="data.about" />
  </div>
</template>
