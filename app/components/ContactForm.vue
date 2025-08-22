<script setup lang="ts">
import type { FormSubmitEvent, ToastProps } from "@nuxt/ui";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.email("Invalid Email"),
  phone: z.string().min(10).max(15),
  title: z.string().min(2).max(100),
  message: z.string().min(2).max(500, { error: "Message too long" }),
});

type Schema = z.infer<typeof schema>;

const defaultState: Schema = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  title: "",
  message: "",
};

const state = ref<Partial<Schema>>({ ...defaultState });

const {
  public: {
    emailjs: { publicKey, templateId, serviceId },
  },
} = useRuntimeConfig();

emailjs.init({
  publicKey,
  blockHeadless: true,
  limitRate: {
    throttle: 10000,
  },
});

const toast = useToast();

const toastError: Partial<ToastProps> = {
  title: "Error",
  description: "Failed to send message. Please try again later.",
  color: "error",
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.target);
  console.log("Data:", event.data);
  try {
    const response = await emailjs.send(serviceId, templateId, event.data);
    if (response.status === 200) {
      toast.add({
        title: "Success",
        description: "Message sent successfully!",
        color: "success",
      });
      state.value = { ...defaultState };
    } else {
      toast.add(toastError);
    }
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Failed to send message. Please try again later.",
      color: "error",
    });
    throw new Error("Failed to send message");
  }
}
</script>
<template>
  <section class="flex flex-col gap-4 w-full">
    <h1 class="capitalize text-3xl font-bold text-center">Get in Touch</h1>
    <UForm
      :schema="schema"
      :state="state"
      @submit="onSubmit"
      class="grid md:grid-cols-2 gap-x-2 gap-y-4"
    >
      <UFormField id="first-name" name="first-name" label="First Name">
        <UInput
          v-model="state.firstName"
          class="w-full"
          placeholder="First Name"
        />
      </UFormField>
      <UFormField id="last-name" name="last-name" label="Last Name">
        <UInput
          v-model="state.lastName"
          class="w-full"
          placeholder="Last Name"
        />
      </UFormField>
      <UFormField id="email" name="email" label="Email">
        <UInput v-model="state.email" placeholder="Email" class="w-full" />
      </UFormField>
      <UFormField id="phone" name="phone" label="Phone Number">
        <UInput
          v-model="state.phone"
          placeholder="Phone Number"
          class="w-full"
        />
      </UFormField>
      <UFormField id="title" name="title" label="Title" class="col-span-2">
        <UInput v-model="state.title" class="w-full" placeholder="Title" />
      </UFormField>
      <UFormField
        id="message"
        name="message"
        label="Message"
        class="col-span-2"
      >
        <UTextarea
          v-model="state.message"
          class="w-full"
          placeholder="Message"
        />
      </UFormField>
      <UButton type="submit" class="w-full text-center font-bold uppercase"
        >Send Message</UButton
      >
    </UForm>
  </section>
</template>
