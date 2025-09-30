<script setup lang="ts">
const {
  public: {
    googleMaps: { apiKey },
  },
} = useRuntimeConfig();
</script>
<template>
  <UPageSection id="location" title="Location" class="flex flex-col gap-4">
    <iframe
      height="450"
      style="border: 0"
      class="w-full"
      loading="lazy"
      allowfullscreen
      :src="`https://www.google.com/maps/embed/v1/place?q=place_id:Eh1IdW50ZXIgU3QsIEdlb3JnZXRvd24sIEd1eWFuYSIuKiwKFAoSCeHe9cy976-NEROpJUnJP77QEhQKEgmzwthgr--vjRF96wALRKTCcg&key=${apiKey}`"
    />
  </UPageSection>
</template>
