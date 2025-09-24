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
          src="/logo.svg"
          alt="Tasty Fusion Logo"
          width="150"
          height="50"
        />
      </div>
      <UNavigationMenu :items="items" highlight class="capitalize" />
    </header>
  </UContainer>
</template>
