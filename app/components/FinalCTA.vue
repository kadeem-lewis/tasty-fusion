<script setup lang="ts">
const links = [
  { label: "View Our Menu", to: "/menu" },
  { label: "Call to Order", href: "tel:+1234567890", variant: "outline" },
];
</script>
<template>
  <UPageCTA
    class="flex flex-col md:flex-row justify-between gap-6"
    title="Ready to Savor the Flavor?"
    description="Delicious meals are just a click or call away."
    :links="links"
  />
</template>
