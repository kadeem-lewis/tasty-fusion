<script setup lang="ts"></script>
<template>
  <UCard>
    <NuxtImg
      src="https://placehold.co/400x300/png?text=Dish"
      alt="Popular Dish"
      width="400"
      height="300"
      class="w-full h-48 object-cover rounded-t"
    />
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">Dish Name</h3>
      <p class="text-gray-600 mb-4">
        A brief description of the dish highlighting its key ingredients and
        flavors.
      </p>
      <div class="flex items-center justify-between">
        <span class="text-primary font-bold">$12.99</span>
        <UButton size="sm" class="uppercase font-bold">Order Now</UButton>
      </div>
    </div>
  </UCard>
</template>
