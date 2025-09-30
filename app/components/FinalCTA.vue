<script setup lang="ts"></script>
<template>
  <UPageCTA
    class="flex flex-col md:flex-row justify-between gap-6"
    title="Ready to Savor the Flavor?"
  >
    <div class="flex flex-col gap-4">
      <p class="text-lg">Order now and experience the best of Tasty Fusion!</p>
      <div class="flex flex-col sm:flex-row gap-4">
        <UButton
          v-for="(link, index) in [
            { label: 'View Our Menu', to: '/menu' },
            {
              label: 'Call to Order',
              href: 'tel:+1234567890',
              variant: 'outline',
            },
          ]"
          :key="index"
          :to="link.to"
          :href="link.href"
          :variant="link.variant || 'primary'"
          size="lg"
          class="uppercase font-bold"
        >
          {{ link.label }}
        </UButton>
      </div>
    </div>
    <NuxtImg
      src="https://placehold.co/600x400/png?text=Delicious+Food"
      alt="Delicious Food"
      width="600"
      height="400"
      class="rounded-lg shadow-lg"
    />
  </UPageCTA>
</template>
