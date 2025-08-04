<script setup lang="ts">
import { Button, FloatLabel, InputMask } from "primevue";
</script>
<template>
  <div class="flex flex-col gap-4">
    <h1 class="capitalize text-3xl font-bold">Get in Touch</h1>
    <form class="grid md:grid-cols-2 gap-x-2 gap-y-4">
      <FloatLabel>
        <InputText />
        <label for="first-name">First Name</label>
      </FloatLabel>
      <FloatLabel>
        <InputText />
        <label for="last-name">Last Name</label>
      </FloatLabel>
      <FloatLabel>
        <InputText />
        <label for="email">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputMask />
        <label for="phone">Phone</label>
      </FloatLabel>
      <FloatLabel class="md:col-span-2">
        <Textarea class="" />
        <label for="message">Message</label>
      </FloatLabel>
      <Button class="w-full">Send Message</Button>
    </form>
  </div>
</template>
