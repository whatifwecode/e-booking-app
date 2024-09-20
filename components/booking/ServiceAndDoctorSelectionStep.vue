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
import { ref, defineEmits, onMounted } from 'vue';
import { useServiceSelectionStore } from '~/store/serviceSelection';
import { fetchServices, fetchDoctorsByService } from '~/services/mockApi'; // Import the mock API service
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";

const emit = defineEmits();
const store = useServiceSelectionStore();

const selectedService = ref(store.selectedService);
const selectedDoctor = ref(store.selectedDoctor);
const services = ref<Service[]>([]);
const doctors = ref<Doctor[]>([]);

onMounted(async () => {
  services.value = await fetchServices();
});

const onServiceChange = async () => {
  if (selectedService.value) {
    store.setService(selectedService.value);
    doctors.value = await fetchDoctorsByService(selectedService.value);
  }
};

const next = () => {
  if (selectedDoctor.value) {
    emit('nextStep');
  }
};
</script>
