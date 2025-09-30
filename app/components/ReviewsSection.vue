<script setup lang="ts"></script>
<template>
  <UPageSection id="testimonials" title="What Our Customers Say">
    <UPageGrid>
      <UPageCard
        v-for="i in 3"
        :key="i"
        icon="i-ri-double-quotes-l"
        class="flex flex-col justify-between p-6"
        :ui="{
          leadingIcon: 'size-8 text-red-500 text-center',
        }"
      >
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
