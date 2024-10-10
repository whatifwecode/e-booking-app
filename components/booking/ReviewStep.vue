<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center mb-4">Review Information</h2>
    <div class="flex flex-col space-y-2 border-2 p-2 items-center gap-1.5 rounded-lg">
      <div class="flex items-center">
        <i class="fas fa-concierge-bell mr-2 text-gray-600"></i>
        <p><strong>Service:</strong> {{ reviewData.service }}</p>
      </div>
      <div class="flex items-center">
        <i class="fas fa-user-md mr-2 text-gray-600"></i>
        <p><strong>Doctor:</strong> {{ reviewData.doctor }}</p>
      </div>
      <div class="flex items-center">
        <i class="fas fa-calendar-check mr-2 text-gray-600"></i>
        <p><strong>Appointment:</strong> {{ reviewData.timeSlot }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-1 mt-4">
      <IButton text="Back" @click="$emit('prevStep')" />
      <IButton text="Confirm" @click="next" />
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { useAppointmentReviewStore } from '~/store/appointmentReview';
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";

const emit = defineEmits();

const appointmentReviewStore = useAppointmentReviewStore();
const reviewData = appointmentReviewStore.reviewData;

const next = () => {
  emit('nextStep');
};
</script>
