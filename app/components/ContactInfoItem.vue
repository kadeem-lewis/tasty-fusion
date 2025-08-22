<script setup lang="ts">
const { icon, title, subtitle } = defineProps<{
  title: string;
  icon: string;
  subtitle: string;
}>();
</script>
<template>
  <div class="flex gap-2 items-center">
    <UBadge size="xl" :icon="icon" />
    <div>
      <p class="font-semibold">{{ title }}</p>
      <p class="text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>
