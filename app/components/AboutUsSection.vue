<script setup lang="ts">
const { aboutData } = defineProps<{
  aboutData: {
    title: string;
    subtitle: string;
    text: string;
  };
}>();
</script>
<template>
  <UPageSection
    class="flex gap-6"
    :headline="aboutData.title"
    :title="aboutData.subtitle"
    :description="aboutData.text"
    orientation="horizontal"
  >
    <NuxtImg
      src="https://placehold.co/600x400"
      height="400"
      width="600"
      alt="About Us"
      class="mb-4 rounded"
    />
  </UPageSection>
</template>
