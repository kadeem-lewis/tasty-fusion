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
    label: "contact",
    to: "/contact",
  },
]);
</script>
<template>
  <UContainer>
    <header class="flex items-center justify-between py-2">
      <div class="flex items-center gap-2">
        <NuxtImg
          src="/tastyfusion.svg"
          alt="Tasty Fusion Logo"
          width="50"
          height="50"
        />
        <span class="text-xl font-bold">Tasty Fusion</span>
      </div>
      <UNavigationMenu :items="items" highlight class="capitalize" />
    </header>
  </UContainer>
</template>
