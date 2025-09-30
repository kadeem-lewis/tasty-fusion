<script setup lang="ts"></script>
<template>
  <UPageSection id="reviews" title="What Our Customers Say">
    <UPageGrid>
      <UPageCard
        v-for="i in 3"
        :key="i"
        icon="i-ri-double-quotes-l"
        class="flex flex-col justify-between p-6"
      >
        <template #leading>
          <div class="flex items-center justify-center">
            <UIcon name="i-ri-double-quotes-l" size="18" class="text-red-500" />
          </div>
        </template>
        <div>
          <p class="mb-4">
            "The food was absolutely delicious and the service was exceptional.
            Highly recommend!"
          </p>
        </div>
        <UUser name="Jane D." description="Food Enthusiast" size="xl" />
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
