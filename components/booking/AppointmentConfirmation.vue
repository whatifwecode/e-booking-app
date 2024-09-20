<template>
  <IModalContainer>
    <div class="text-center">
      <h2 class="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
      <p class="text-lg">Thank you for your payment. The details have been sent to your email address.</p>
      <p class="mt-4">Please check your inbox for further instructions.</p>

      <div class="flex flex-col mt-1.5">
        <IButton :text="'Finish'" @click="finishProcess" />
      </div>
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import IModalContainer from '~/components/shared/IModalContainer.vue';
import IButton from '~/components/shared/IButton.vue';

const finishProcess = () => {
  navigateTo('/dashboard');
};
</script>
