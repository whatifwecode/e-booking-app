<template>
    <component :is="currentStepComponent" @nextStep="nextStep" @prevStep="prevStep" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ServiceStep from '~/components/booking/ServiceAndDoctorSelectionStep.vue';
import DateSelectionStep from '~/components/booking/DateSelectionStep.vue';
import ReviewStep from '~/components/booking/ReviewStep.vue';
import PaymentStep from '~/components/booking/PaymentStep.vue';
import AppointmentConfirmation from "~/components/booking/AppointmentConfirmation.vue";

const steps = [
  ServiceStep,
  DateSelectionStep,
  ReviewStep,
  PaymentStep,
  AppointmentConfirmation
];

const currentStepIndex = ref(0);

const nextStep = () => {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value += 1;
  }
};

const prevStep = () => {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value -= 1;
  }
};

const currentStepComponent = computed(() => {
  return steps[currentStepIndex.value];
});
</script>
