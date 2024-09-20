<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center">Review Information</h2>
    <div>
      <p><strong>Service:</strong> {{ selectedService }}</p>
      <p><strong>Doctor:</strong> {{ selectedDoctor }}</p>
      <p><strong>Appointment:</strong> {{ selectedTimeSlot }}</p>
    </div>
    <div class="flex flex-col gap-1 mt-1.5">
      <IButton text="Back" @click="$emit('prevStep')"/>
      <IButton text="Confrim" @click="next" />
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { useAppointmentStore } from '~/store/appointment';
import { defineEmits } from 'vue';
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";
import {useDateSelectionStore} from "~/store/dateSelection";

const emit = defineEmits();

const  selectedServiceStore = useAppointmentStore();
const selectedTimeSlotStore = useDateSelectionStore();

const { selectedTimeSlot } = selectedTimeSlotStore;
const { selectedService, selectedDoctor } = selectedServiceStore;

const next = () => {
  emit('nextStep');
};
</script>
