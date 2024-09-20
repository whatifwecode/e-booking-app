<template>
  <IModalContainer>
    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-semibold text-center">Welcome! Choose an action</h2>
      <IButton text="E-Booking" @click="openEbooking" />
      <IButton text="History" @click="openHistory" />
      <IButton text="Receipts" @click="openReceipts" />
      <IButton text="FAQ" @click="openFAQ" />
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import IButton from "~/components/shared/IButton.vue";
import IModalContainer from "~/components/shared/IModalContainer.vue";

const navigateTo = (path: string) => {
  navigateTo(path);
};

const openEbooking = () => {
  navigateTo('/booking');
};

const openHistory = () => {
  // Redirect to history section (if already implemented)
};

const openReceipts = () => {
  // Redirect to receipts section (if already implemented)
};

const openFAQ = () => {
  // Redirect to FAQ section (if already implemented)
};
</script>
