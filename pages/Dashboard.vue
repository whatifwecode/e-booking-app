<template>
  <IModalContainer>
    <div class="flex flex-wrap justify-center gap-6 p-6">
      <!-- e-Booking -->
      <div
          class="w-40 h-40 flex flex-col items-center justify-center bg-light-green rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg hover:scale-105"
          @click="openEbooking"
      >
        <i class="fas fa-calendar-alt text-4xl mb-2 icon-color"></i>
        <p class="text-center text-sm font-medium text-gray-700">e-Broneerimine</p>
      </div>

      <!-- History -->
      <div
          class="w-40 h-40 flex flex-col items-center justify-center bg-light-green rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg hover:scale-105"
          @click="openHistory"
      >
        <i class="fas fa-history text-4xl mb-2 icon-color"></i>
        <p class="text-center text-sm font-medium text-gray-700">Ajalugu</p>
      </div>

      <!-- Receipts -->
      <div
          class="w-40 h-40 flex flex-col items-center justify-center bg-light-green rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg hover:scale-105"
          @click="openReceipts"
      >
        <i class="fas fa-receipt text-4xl mb-2 icon-color"></i>
        <p class="text-center text-sm font-medium text-gray-700">Arved</p>
      </div>

      <!-- FAQ -->
      <div
          class="w-40 h-40 flex flex-col items-center justify-center bg-light-green rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg hover:scale-105"
          @click="openFAQ"
      >
        <i class="fas fa-question-circle text-4xl mb-2 icon-color"></i>
        <p class="text-center text-sm font-medium text-gray-700">KKK</p>
      </div>
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import IModalContainer from "~/components/shared/IModalContainer.vue";
import { navigateTo } from "nuxt/app";

const openEbooking = () => {
  navigateTo('/booking');
};

const openHistory = () => {
  navigateTo('/history');
};

const openReceipts = () => {
  navigateTo('/receipts');
};

const openFAQ = () => {
  navigateTo('/faq');
};
</script>

<style scoped>
.bg-light-blue {
  background-color: #e0f7fa; /* Light blue */
}

.bg-light-green {
  background-color: #e8f5e9; /* Light green */
}

.icon-color {
  color: #97bf0d; /* Set all icons to this color */
}

.transition {
  transition: transform 0.2s, box-shadow 0.2s;
}
</style>
