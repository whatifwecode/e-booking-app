<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center">{{ isRegistering ? 'Register' : 'Login' }}</h2>
    <div v-if="!isRegistering">
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input type="email" id="email" v-model="email" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium">Password</label>
        <input type="password" id="password" v-model="password" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
      <div class="flex flex-col gap-1 mt-1.5">
        <IButton :text="'Next'" :disabled="!isLoginValid" @click="login" />
        <IButton :text="'Foreign User'" @click="toggleRegistering" />
      </div>
    </div>

    <div v-else>
      <div>
        <label for="fullName" class="block text-sm font-medium">Full Name</label>
        <input type="text" id="fullName" v-model="fullName" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium">Phone Number</label>
        <input type="tel" id="phone" v-model="phone" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label for="regEmail" class="block text-sm font-medium">Email</label>
        <input type="email" id="regEmail" v-model="regEmail" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label for="idNumber" class="block text-sm font-medium">ID Number</label>
        <input type="text" id="idNumber" v-model="idNumber" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
      <div class="flex flex-col gap-1 mt-1.5">
        <IButton :text="'Next'" :disabled="!isRegistrationValid" @click="register" />
        <IButton :text="'Back To Login'" @click="toggleRegistering" />
      </div>
    </div>

    <IMessage v-if="showMessage" :message="fallbackMessage" :isVisible="showMessage" @close="showMessage = false" />
  </IModalContainer>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue';
import { useRegistrationStore } from '~/store/registration';
import IMessage from "~/components/shared/IMessage.vue";
import IButton from "~/components/shared/IButton.vue";
import IModalContainer from "~/components/shared/IModalContainer.vue";

const emit = defineEmits();
const store = useRegistrationStore();

const email = ref('');
const password = ref('');
const fullName = ref('');
const phone = ref('');
const regEmail = ref('');
const idNumber = ref('');

const fallbackMessage = ref('');
const showMessage = ref(false);
const isRegistering = ref(false);

const login = () => {
  showMessage.value = true;
  fallbackMessage.value = 'Login Successful';
  navigateTo('/dashboard');
};

const register = () => {
  store.setRegistrationData({
    fullName: fullName.value,
    phone: phone.value,
    email: regEmail.value,
    idNumber: idNumber.value,
  });

  showMessage.value = true;
  fallbackMessage.value = 'Registration Successful';
  navigateTo('/dashboard');
};

const toggleRegistering = () => {
  isRegistering.value = !isRegistering.value;
};

const isLoginValid = computed(() => {
  return email.value && password.value;
});

const isRegistrationValid = computed(() => {
  return fullName.value && phone.value && regEmail.value && idNumber.value;
});
</script>

