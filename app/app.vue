<script setup lang="ts">
const items = ref([
  { label: "Home", route: "/" },
  { label: "Menu", route: "/menu" },
  { label: "Gallery", route: "/gallery" },
  { label: "Contact", route: "/contact" },
]);
</script>
<template>
  <div class="min-h-dvh max-w-6xl flex flex-col mx-auto">
    <NuxtRouteAnnouncer />
    <header>
      <Menubar
        :model="items"
        :pt="{
          rootList: 'w-full',
        }"
        class="uppercase font-semibold"
      >
        <template #start>
          <NuxtLink to="/"> Tasty Fusion </NuxtLink>
        </template>
        <template #item="{ item }">
          <NuxtLink :to="item.route">{{ item.label }}</NuxtLink>
        </template>
      </Menubar>
      <TopBar />
    </header>
    <main class="py-4">
      <NuxtPage />
    </main>
    <footer id="footer" class="self-center">
      <p>&copy; 2025 Tasty Fusion. All rights reserved.</p>
    </footer>
  </div>
</template>
