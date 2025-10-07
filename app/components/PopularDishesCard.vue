<script setup lang="ts">
const { item } = defineProps<{
  item: {
    name: string;
    description?: string;
    imageUrl?: string;
  };
}>();
</script>
<template>
  <UPageCard :title="item.name" orientation="vertical" reverse>
    <template v-if="item.description" #description>{{
      item.description
    }}</template>
    <NuxtImg
      src="https://placehold.co/400x300/png?text=Dish"
      alt="Popular Dish"
      width="400"
      height="300"
      class="w-full h-48 object-cover rounded-t"
    />
  </UPageCard>
</template>
