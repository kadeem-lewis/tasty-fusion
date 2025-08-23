<script setup lang="ts"></script>
<template>
  <div class="py-4 bg-neutral-700 text-neutral-200">
    <UContainer>
      <ul class="flex list-disc gap-6 items-center justify-center">
        <li class="list-none">63 Hunter St</li>
        <li>Albouystown, Georgetown</li>
        <li>
          <ULink
            href="tel:1234567890"
            external
            class="hover:text-neutral-400"
            inactive-class="text-neutral-300"
          >
            123.456.7890
          </ULink>
        </li>
      </ul>
    </UContainer>
  </div>
</template>
