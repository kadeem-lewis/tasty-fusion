<script setup lang="ts">
const contactInfoItems = [
  {
    icon: "i-material-symbols-location-on",
    title: "Address",
    subtitle: "63 Hunter St, Albouystown, Georgetown",
  },
  {
    icon: "i-material-symbols-call",
    title: "Phone",
    subtitle: "+1 (123) 456-7890",
  },
  {
    icon: "i-material-symbols-mail",
    title: "Email",
    subtitle: "example@example.com",
  },
  {
    icon: "i-material-symbols-alarm",
    title: "Opening Hours",
    subtitle: "Mon - Fri: 9 AM - 5 PM",
  },
];
</script>
<template>
  <UPageSection>
    <UCard title="Contact Information" class="h-full">
      <template #header>
        <h2 class="text-2xl font-bold text-center">Contact Information</h2>
      </template>
      <div class="flex flex-col gap-4">
        <ContactInfoItem
          v-for="item of contactInfoItems"
          :key="item.title"
          v-bind="item"
        />
      </div>
    </UCard>
  </UPageSection>
</template>
