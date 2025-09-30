<script setup lang="ts">
const { data } = await useAsyncData("landingPage", () => {
  return queryCollection("landingPage").first();
});
</script>
<template>
  <div class="[&>*:nth-child(even)]:bg-neutral-100">
    <HeroSection :hero-data="data.hero" />
    <PopularDishesSection />
    <AboutUsSection :about-data="data.about" />
    <GallerySection />
    <ReviewsSection />
    <FinalCTA />
  </div>
</template>
