<script setup lang="ts">
const items = ref([
  { label: "Home", route: "/" },
  { label: "Menu", route: "/menu" },
  { label: "Gallery", route: "/gallery" },
  { label: "Contact", route: "/contact" },
]);
</script>
<template>
  <UApp>
    <UContainer class="min-h-dvh flex flex-col mx-auto">
      <NuxtRouteAnnouncer />
      <TheHeader />
      <TopBar />
      <main class="h-full grow py-4">
        <NuxtPage />
      </main>
      <TheFooter />
    </UContainer>
  </UApp>
</template>
