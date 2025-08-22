<script setup lang="ts"></script>
<template>
  <div class="flex flex-col gap-4">
    <h1 class="capitalize text-3xl font-bold">Get in Touch</h1>
    <form class="grid md:grid-cols-2 gap-x-2 gap-y-4">
      <UInput :ui="{ base: 'peer' }">
        <BaseFloatLabel html-for="first-name">First Name</BaseFloatLabel>
      </UInput>
      <UInput :ui="{ base: 'peer' }">
        <BaseFloatLabel html-for="last-name">Last Name</BaseFloatLabel>
      </UInput>
      <UInput :ui="{ base: 'peer' }">
        <BaseFloatLabel html-for="email">Email</BaseFloatLabel>
      </UInput>
      <UInput :ui="{ base: 'peer' }">
        <BaseFloatLabel html-for="phone">Phone</BaseFloatLabel>
      </UInput>

      <UTextarea class="">
        <BaseFloatLabel html-for="message">Message</BaseFloatLabel>
      </UTextarea>
      <UButton class="w-full">Send Message</UButton>
    </form>
  </div>
</template>
