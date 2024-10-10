<template>
  <div class="e-login-options">
    <h3 class="text-center font-semibold mb-2">E-Login</h3>
    <div class="flex flex-col gap-2">
      <button class="icon-button" @click="loginWithSmartID">
        <i class="fas fa-mobile-alt"></i> Smart ID
      </button>
      <button class="icon-button" @click="loginWithMobileID">
        <i class="fas fa-mobile"></i> Mobile ID
      </button>
      <button class="icon-button" @click="loginWithIDCard">
        <i class="fas fa-id-card"></i> ID Card
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNuxtApp, useRouter } from '#app';
import { EstELoginService } from '~/services/estELogin';

const { $showMessageFn } = useNuxtApp();
const router = useRouter();

const personalCode = ref('');

const loginWithSmartID = async () => {
  const success = await EstELoginService.loginWithSmartID(personalCode.value);
  if (success) {
    $showMessageFn('Smart ID login successful');
    router.push('/dashboard');
  } else {
    $showMessageFn('Smart ID login failed');
  }
};

const loginWithMobileID = async () => {
  const success = await EstELoginService.loginWithMobileID('+37212345678', personalCode.value);
  if (success) {
    $showMessageFn('Mobile ID login successful');
    router.push('/dashboard');
  } else {
    $showMessageFn('Mobile ID login failed');
  }
};

const loginWithIDCard = async () => {
  const success = await EstELoginService.loginWithIDCard();
  if (success) {
    $showMessageFn('ID Card login successful');
    router.push('/dashboard');
  } else {
    $showMessageFn('ID Card login failed');
  }
};
</script>

<style scoped>
.e-login-options {
  padding: 1rem;
}

.icon-button {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.icon-button i {
  margin-right: 0.5rem;
}

.icon-button:hover {
  background-color: #e5e7eb;
}
</style>
