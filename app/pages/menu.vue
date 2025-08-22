<script setup lang="ts">
const { data: menu } = await useAsyncData("menu", () => {
  return queryCollection("menu")
    .where("isActive", "=", true)
    .order("order", "ASC")
    .all();
});
</script>
<template>
  <UCard>
    <template #header>
      <h2 class="text-4xl font-bold text-center">Menu</h2>
    </template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section
        v-for="category in menu"
        :key="category.name"
        class="border-b border-dotted px-4 py-6"
      >
        <h3 class="text-2xl font-semibold text-primary text-center font-oswald">
          {{ category.name }}
        </h3>
        <ul class="flex flex-col gap-4">
          <li
            v-for="item in category.items"
            :key="item.name"
            class="flex justify-between items-center gap-4"
          >
            <div>
              <h4 class="text-lg">{{ item.name }}</h4>
              <p class="text-muted">{{ item.description }}</p>
            </div>
            <p class="self-start text-muted">${{ item.price }}</p>
          </li>
        </ul>
      </section>
    </div>
  </UCard>
</template>
