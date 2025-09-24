<script setup lang="ts">
const { heroData } = defineProps<{
  heroData: {
    title: string;
    subtitle: string;
    text: string;
  };
}>();
</script>
<template>
  <section class="flex justify-between">
    <div class="flex flex-col gap-2">
      <h1 class="text-5xl font-bold text-center">{{ heroData.title }}</h1>
      <p>
        {{ heroData.text }}
      </p>
      <div class="flex gap-4">
        <UButton size="xl" class="uppercase font-bold" to="/menu"
          >View Our Menu</UButton
        >
        <UButton
          size="xl"
          class="uppercase font-bold"
          variant="outline"
          href="tel:+1234567890"
          >Call to Order</UButton
        >
      </div>
    </div>
    <div>
      <NuxtImg
        src="https://placehold.co/600x400/png?text=Delicious+Food"
        alt="Delicious Food"
        width="600"
        height="400"
        class="rounded-lg shadow-lg"
      />
    </div>
  </section>
</template>
