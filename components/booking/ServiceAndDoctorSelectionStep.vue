<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center">Select Service and Doctor</h2>
    <div>
      <label for="service" class="block text-sm font-medium">Service</label>
      <select v-model="selectedService" id="service" @change="onServiceChange" class="mt-1 block w-full px-3 py-2 border rounded-md">
        <option v-for="service in services" :key="service.id" :value="service.name">{{ service.name }}</option>
      </select>
    </div>
    <div v-if="selectedService">
      <label for="doctor" class="block text-sm font-medium">Doctor</label>
      <select v-model="selectedDoctor" id="doctor" class="mt-1 block w-full px-3 py-2 border rounded-md">
        <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.name">{{ doctor.name }}</option>
      </select>
    </div>
    <div class="flex flex-col mt-1.5">
      <IButton text="Next" @click="next" :disabled="!selectedDoctor"/>
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue';
import { useAppointmentStore } from '~/store/appointment';
import { services, getDoctorsByService } from '~/services/mockData';
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";

const emit = defineEmits();
const store = useAppointmentStore(); // Create a store instance

const selectedService = ref(store.selectedService); // Bind to store
const selectedDoctor = ref(store.selectedDoctor); // Bind to store
const doctors = ref([]);

watch(selectedService, (newValue) => {
  store.setService(newValue); // Update store when selectedService changes
  doctors.value = getDoctorsByService(newValue);
});

watch(selectedDoctor, (newValue) => {
  store.setDoctor(newValue); // Update store when selectedDoctor changes
});

const onServiceChange = () => {
  doctors.value = getDoctorsByService(selectedService.value);
};

const next = () => {
  if (selectedDoctor.value) {
    emit('nextStep');
  }
};
</script>
