<template>
  <component :is="currentStepComponent" @nextStep="nextStep" @prevStep="prevStep" />
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useBookingStepStore } from '~/store/bookingStep';
import ServiceStep from '~/components/booking/ServiceAndDoctorSelectionStep.vue';
import DateSelectionStep from '~/components/booking/DateSelectionStep.vue';
import ReviewStep from '~/components/booking/ReviewStep.vue';
import PaymentStep from '~/components/booking/PaymentStep.vue';
import AppointmentConfirmation from '~/components/booking/AppointmentConfirmation.vue';

const steps = [
  ServiceStep,
  DateSelectionStep,
  ReviewStep,
  PaymentStep,
  AppointmentConfirmation
];

const bookingStepStore = useBookingStepStore();
const currentStepIndex = computed(() => bookingStepStore.currentStep);

onMounted(() => {
  bookingStepStore.$reset();
  // bookingStepStore.loadStep();
  console.log('Loaded step on mounted:', currentStepIndex.value);
});

watch(currentStepIndex, (newValue, oldValue) => {
  console.log(`Step changed from ${oldValue} to ${newValue}`);
});

const nextStep = () => {
  console.log('Current step before next:', currentStepIndex.value);
  if (currentStepIndex.value < steps.length - 1) {
    bookingStepStore.setStep(currentStepIndex.value + 1);
    console.log('Stepped to:', currentStepIndex.value + 1);
  }
};

const prevStep = () => {
  if (currentStepIndex.value > 0) {
    bookingStepStore.setStep(currentStepIndex.value - 1);
  }
};

const currentStepComponent = computed(() => steps[currentStepIndex.value]);
</script>
