<script setup lang="ts">
const { aboutData } = defineProps<{
  aboutData: {
    title: string;
    text: string;
  };
}>();
</script>
<template>
  <section>
    <h2 class="uppercase font-bold text-2xl text-center">
      {{ aboutData.title }}
    </h2>
    <p>{{ aboutData.subtitle }}</p>
    <p class="text-center">{{ aboutData.text }}</p>
  </section>
</template>
