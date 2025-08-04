<script setup lang="ts">
const contactInfoItems = [
  {
    icon: "material-symbols:location-on",
    title: "Address",
    subtitle: "63 Hunter St, Albouystown, Georgetown",
  },
  {
    icon: "material-symbols:call",
    title: "Phone",
    subtitle: "+1 (123) 456-7890",
  },
  {
    icon: "material-symbols:mail",
    title: "Email",
    subtitle: "example@example.com",
  },
  {
    icon: "material-symbols:alarm",
    title: "Opening Hours",
    subtitle: "Mon - Fri: 9 AM - 5 PM",
  },
];
</script>
<template>
  <Card>
    <template #title> Contact Information </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <ContactInfoItem
          v-for="item of contactInfoItems"
          :key="item.title"
          v-bind="item"
        />
      </div>
    </template>
  </Card>
</template>
