<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "home",
    to: "/",
  },

  {
    label: "menu",
    to: "/menu",
  },
  {
    label: "gallery",
    to: "/gallery",
  },
  {
    label: "contact",
    to: "/contact",
  },
]);
</script>
<template>
  <header class="flex items-center justify-between py-2">
    <div>
      <span>Tasty Fusion</span>
    </div>
    <UNavigationMenu :items="items" highlight class="capitalize" />
  </header>
</template>
