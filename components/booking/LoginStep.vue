<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center">{{ isRegistering ? t('register') : t('login') }}</h2>
    <div class="flex justify-between items-baseline" v-if="!isRegistering">
      <EstELogin />
      <div class="w-full">
        <div class="mb-3">
          <label for="email" class="block text-sm font-medium">Email</label>
          <div class="relative">
            <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2"></i>
            <input type="email" id="email" v-model="email" :class="{'border-red-500': !email}" class="mt-1 block w-full px-10 py-2 border rounded-md transition duration-200" />
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="block text-sm font-medium">Password</label>
          <div class="relative">
            <i class="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2"></i>
            <input type="password" id="password" v-model="password" :class="{'border-red-500': !password}" class="mt-1 block w-full px-10 py-2 border rounded-md transition duration-200" />
          </div>
        </div>
        <div class="flex flex-col gap-2 mt-1.5">
          <IButton :text="t('next')" :disabled="!isLoginValid" @click="login" />
          <IButton :text="t('foreignUser')" @click="toggleRegistering" />
        </div>
      </div>
    </div>

    <div v-else>
      <RegistrationForm
          :isRegistering="isRegistering"
          :toggleRegistering="toggleRegistering"
          :register="register"
          :isRegistrationValid="isRegistrationValid"
          :registrationData="registrationData"
      />
    </div>

    <IMessage v-if="isMessageVisible" :message="messageContent" :isVisible="isMessageVisible" @close="hideMessage" />
  </IModalContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRegistrationStore } from '~/store/registration';
import IMessage from "~/components/shared/IMessage.vue";
import IButton from "~/components/shared/IButton.vue";
import IModalContainer from "~/components/shared/IModalContainer.vue";
import EstELogin from "~/components/login/EstELogin.vue";
import RegistrationForm from "~/components/login/RegistrationForm.vue";
import { useNuxtApp } from "#app";
import { useI18n } from 'vue-i18n';

interface RegistrationData {
  fullName: string;
  phone: string;
  email: string;
  idNumber: string;
}

const store = useRegistrationStore();
const { t } = useI18n();
const { $showMessageFn } = useNuxtApp();

const email = ref('');
const password = ref('');
const messageContent = ref('');
const isMessageVisible = ref(false);
const isRegistering = ref(false);

const registrationData = ref<RegistrationData>({
  fullName: '',
  phone: '',
  email: '',
  idNumber: '',
});

const isRegistrationValid = computed(() => {
  return (
      !!registrationData.value.fullName &&
      !!registrationData.value.phone &&
      !!registrationData.value.email &&
      !!registrationData.value.idNumber
  );
});

const hideMessage = () => {
  isMessageVisible.value = false;
};

const login = () => {
  $showMessageFn('Login Successful');
  navigateTo('/dashboard');
};

const register = () => {
  store.setRegistrationData(registrationData.value);
  $showMessageFn('Registration Successful');
  navigateTo('/dashboard');
};

const toggleRegistering = () => {
  isRegistering.value = !isRegistering.value;
};

const isLoginValid = computed(() => {
  return email.value && password.value;
});
</script>
