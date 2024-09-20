<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center">Review Information</h2>
    <div>
      <p><strong>Service:</strong> {{ reviewData.service }}</p>
      <p><strong>Doctor:</strong> {{ reviewData.doctor }}</p>
      <p><strong>Appointment:</strong> {{ reviewData.timeSlot }}</p>
    </div>
    <div class="flex flex-col gap-1 mt-1.5">
      <IButton text="Back" @click="$emit('prevStep')"/>
      <IButton text="Confrim" @click="next" />
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { useAppointmentReviewStore } from '~/store/appointmentReview';
import { defineEmits } from 'vue';
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";

const emit = defineEmits();

const appointmentReviewStore = useAppointmentReviewStore();
const reviewData = appointmentReviewStore.reviewData;

const next = () => {
  emit('nextStep');
};
</script>
