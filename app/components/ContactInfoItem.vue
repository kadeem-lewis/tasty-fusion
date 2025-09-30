<script setup lang="ts">
const { icon, title, subtitle } = defineProps<{
  title: string;
  icon: string;
  subtitle: string;
}>();
</script>
<template>
  <UUser
    class="flex gap-2 items-center"
    :name="title"
    :description="subtitle"
    size="3xl"
    :avatar="{
      icon: icon,
    }"
  />
</template>
