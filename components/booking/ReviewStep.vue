<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center mb-4">Ülevaate Info</h2>

    <!-- Doctor Info -->
    <div class="flex flex-col space-y-2 border-2 p-2 items-center gap-1.5 rounded-lg">
      <div class="flex items-center">
        <i class="fas fa-user-md mr-2 text-gray-600"></i>
        <p><strong>Arst:</strong> {{ reviewData.doctor }}</p>
      </div>

      <!-- Date Info -->
      <div class="flex items-center">
        <i class="fas fa-calendar-day mr-2 text-gray-600"></i>
        <p><strong>Aeg:</strong> {{ reviewData.date }}</p>
      </div>

      <!-- Time Slot Info -->
      <div class="flex items-center">
        <i class="fas fa-clock mr-2 text-gray-600"></i>
        <p><strong>Valitud Aeg:</strong> {{ reviewData.selectedTime }}</p>
      </div>

      <!-- Price Info -->
      <div class="flex items-center">
        <i class="fas fa-euro-sign mr-2 text-gray-600"></i>
        <p><strong>Hind:</strong> {{ reviewData.price }} €</p>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col gap-1 mt-4">
      <IButton text="Tagasi" @click="$emit('prevStep')" />
      <IButton text="Kinnita" @click="next" />
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { useAppointmentReviewStore } from '~/store/appointmentReview';
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";

const emit = defineEmits();

const appointmentReviewStore = useAppointmentReviewStore();
const reviewData = appointmentReviewStore.reviewData.timeSlot;
console.log(reviewData);

const next = () => {
  emit('nextStep');
};
</script>
