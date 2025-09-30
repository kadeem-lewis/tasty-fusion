<script setup lang="ts"></script>
<template>
  <UPageSection id="gallery" title="Gallery">
    <UPageColumns>
      <NuxtImg
        v-for="i in 6"
        :key="i"
        src="https://placehold.co/600x400/png?text=Delicious+Food"
        alt="Delicious Food"
        width="600"
        height="400"
        class="rounded-lg shadow-lg"
      />
    </UPageColumns>
  </UPageSection>
</template>
