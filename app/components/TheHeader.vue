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
    <UHeader mode="slideover">
      <template #title>
        <NuxtImg
          src="/logo.svg"
          alt="Tasty Fusion Logo"
          width="150"
          height="50"
        />
      </template>
      <template #right>
        <UNavigationMenu
          :items="items"
          highlight
          class="capitalize hidden md:flex"
        />
      </template>
      <template #body>
        <UNavigationMenu
          :items="items"
          highlight
          class="capitalize"
          orientation="vertical"
        />
      </template>
    </UHeader>
  </UContainer>
</template>
