<script setup lang="ts">
const { data: popularItems } = await useAsyncData("popularDishes", async () => {
  const menuItems = await queryCollection("menu")
    .where("isActive", "=", true)
    .all();
  return menuItems
    .flatMap((category) =>
      category.items.filter((item) => item.isPopular && item.isAvailable)
    )
    .slice(0, 3);
});

console.log(popularItems);
</script>
<template>
  <UPageSection id="popular" class="space-y-6" title="Popular Dishes">
    <template #body>
      <UPageGrid>
        <PopularDishesCard
          v-for="item in popularItems"
          :key="item.name"
          :item="item"
        />
      </UPageGrid>
    </template>

    <template #footer>
      <div class="text-center">
        <NuxtLink to="/menu">
          <UButton color="primary" size="xl" class="font-bold"
            >View Full Menu</UButton
          >
        </NuxtLink>
      </div>
    </template>
  </UPageSection>
</template>
