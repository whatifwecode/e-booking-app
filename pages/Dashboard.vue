<template>
  <IModalContainer>
    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-semibold text-center">Welcome! Choose an action</h2>
      <IButton text="e_booking" @click="openEbooking" />
      <IButton text="history" @click="openHistory" />
      <IButton text="receipts" @click="openReceipts" />
      <IButton text="faq" @click="openFAQ" />
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import IButton from "~/components/shared/IButton.vue";
import IModalContainer from "~/components/shared/IModalContainer.vue";

const openEbooking = () => {
  navigateTo('/booking');
};

const openHistory = () => {
};

const openReceipts = () => {
};

const openFAQ = () => {
};
</script>
