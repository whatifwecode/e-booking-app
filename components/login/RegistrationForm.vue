<template>
  <div>
    <div class="mb-3">
      <label for="fullName" class="block text-sm font-medium">Full Name</label>
      <div class="relative">
        <i class="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        <input type="text" id="fullName" v-model="registrationData.fullName" :class="{'border-red-500': !registrationData.fullName}" class="mt-1 block w-full px-10 py-2 border rounded-md transition duration-200" />
      </div>
    </div>
    <div class="mb-3">
      <label for="phone" class="block text-sm font-medium">Phone Number</label>
      <div class="relative">
        <i class="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        <input type="tel" id="phone" v-model="registrationData.phone" :class="{'border-red-500': !registrationData.phone}" class="mt-1 block w-full px-10 py-2 border rounded-md transition duration-200" />
      </div>
    </div>
    <div class="mb-3">
      <label for="regEmail" class="block text-sm font-medium">Email</label>
      <div class="relative">
        <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        <input type="email" id="regEmail" v-model="registrationData.email" :class="{'border-red-500': !registrationData.email}" class="mt-1 block w-full px-10 py-2 border rounded-md transition duration-200" />
      </div>
    </div>
    <div class="mb-3">
      <label for="idNumber" class="block text-sm font-medium">ID Number</label>
      <div class="relative">
        <i class="fas fa-id-card absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        <input type="text" id="idNumber" v-model="registrationData.idNumber" :class="{'border-red-500': !registrationData.idNumber}" class="mt-1 block w-full px-10 py-2 border rounded-md transition duration-200" />
      </div>
    </div>
    <div class="flex flex-col gap-1 mt-1.5">
      <IButton :text="t('next')" :disabled="!isRegistrationValid" @click="register" />
      <IButton :text="t('backToLogin')" @click="toggleRegistering" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import IButton from "~/components/shared/IButton.vue";

interface RegistrationFormProps {
  isRegistering: boolean;
  toggleRegistering: () => void;
  register: () => void;
  isRegistrationValid: boolean;
  registrationData: {
    fullName: string;
    phone: string;
    email: string;
    idNumber: string;
  };
}

const props = defineProps<RegistrationFormProps>();
const { t } = useI18n();
</script>
