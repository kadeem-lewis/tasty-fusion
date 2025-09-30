<script setup lang="ts">
const { heroData } = defineProps<{
  heroData: {
    title: string;
    subtitle: string;
    text: string;
  };
}>();

const links = ref([
  {
    label: "View Our Menu",
    to: "/menu",
    size: "xl",
    class: "uppercase font-bold",
  },
  {
    label: "Call to Order",
    href: "tel:+1234567890",
    variant: "outline",
    size: "xl",
    class: "uppercase font-bold",
  },
]);
</script>
<template>
  <UPageCTA
    class="flex justify-between gap-6"
    :title="heroData.title"
    :description="heroData.text"
    orientation="horizontal"
    :links="links"
  >
    <NuxtImg
      src="https://placehold.co/600x400/png?text=Delicious+Food"
      alt="Delicious Food"
      width="600"
      height="400"
      class="rounded-lg shadow-lg"
    />
  </UPageCTA>
</template>
