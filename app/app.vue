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
    <NuxtRouteAnnouncer />
    <div class="flex flex-col min-h-dvh">
      <TheHeader />
      <TopBar />
      <UContainer class="h-full grow">
        <main class="py-4">
          <NuxtPage />
        </main>
      </UContainer>
      <TheFooter />
    </div>
  </UApp>
</template>
