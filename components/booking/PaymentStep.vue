<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center">Payment</h2>

    <!-- Timer Display -->
    <div class="text-center mb-4">
      <p class="text-lg font-semibold">Time Left: {{ timeLeft }}</p>
    </div>

    <!-- Card Number -->
    <div>
      <label for="card-number" class="block text-sm font-medium">Card Number</label>
      <input type="text" id="card-number" v-model="cardNumber" class="mt-1 block w-full px-3 py-2 border rounded-md"
             :class="{ 'border-red-500': cardNumberError && !cardNumber }" />
      <span v-if="cardNumberError && !cardNumber" class="text-red-500 text-sm">Card Number is required</span>
    </div>

    <!-- Expiry Date -->
    <div>
      <label for="expiry-date" class="block text-sm font-medium">Expiry Date</label>
      <input type="text" id="expiry-date" v-model="expiryDate" class="mt-1 block w-full px-3 py-2 border rounded-md"
             :class="{ 'border-red-500': expiryDateError && !expiryDate }" />
      <span v-if="expiryDateError && !expiryDate" class="text-red-500 text-sm">Expiry Date is required</span>
    </div>

    <!-- CVV -->
    <div>
      <label for="cvv" class="block text-sm font-medium">CVV</label>
      <input type="text" id="cvv" v-model="cvv" class="mt-1 block w-full px-3 py-2 border rounded-md"
             :class="{ 'border-red-500': cvvError && !cvv }" />
      <span v-if="cvvError && !cvv" class="text-red-500 text-sm">CVV is required</span>
    </div>

    <!-- Pay Button -->
    <div class="flex flex-col mt-1.5">
      <IButton text="Pay" :disabled="!isFormValid || !timeLeft" @click="pay"/>
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";

const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
const cardNumberError = ref(false);
const expiryDateError = ref(false);
const cvvError = ref(false);

const emit = defineEmits();

// Timer variables
const timer = ref(300); // 5 minutes in seconds
const timeLeft = computed(() => {
  const minutes = Math.floor(timer.value / 60);
  const seconds = timer.value % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

let timerInterval: ReturnType<typeof setInterval>;

const pay = () => {
  if (isFormValid.value) {
    emit('nextStep');
  } else {
    cardNumberError.value = !cardNumber.value;
    expiryDateError.value = !expiryDate.value;
    cvvError.value = !cvv.value;
  }
};

const isFormValid = computed(() => {
  return cardNumber.value && expiryDate.value && cvv.value;
});

// Start the timer on mount and stop it when the component is destroyed
onMounted(() => {
  timerInterval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
});

// Cleanup the interval when the component is destroyed
onBeforeUnmount(() => {
  clearInterval(timerInterval);
});
</script>
