<script setup lang="ts"></script>
<template>
  <UPageSection id="popular" class="space-y-6" title="Popular Dishes">
    <template #body>
      <UPageGrid>
        <PopularDishesCard v-for="i in 3" :key="i" />
      </UPageGrid>
    </template>

    <template #footer>
      <div class="text-center">
        <NuxtLink to="/menu">
          <UButton color="primary" size="xl" class="font-bold"
            >View Full Menu</UButton
          >
        </NuxtLink>
      </div>
    </template>
  </UPageSection>
</template>
