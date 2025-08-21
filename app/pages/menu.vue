<script setup lang="ts">
const { data: menu } = await useAsyncData("menu", () => {
  return queryCollection("menu").all();
});
</script>
<template>
  <Card>
    <template #title> Menu </template>
    <template #content>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="category in menu" :key="category.name" class="">
          <h3 class="text-2xl font-semibold text-center font-oswald">
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
                <p>{{ item.description }}</p>
              </div>
              <p class="self-start">${{ item.price }}</p>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </Card>
</template>
