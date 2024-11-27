<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center mb-4">Valige Teenus</h2>
    <div class="flex flex-wrap justify-center gap-6 p-6">
      <div
          v-for="service in services"
          :key="service.id"
          class="w-40 h-40 flex flex-col items-center justify-center bg-fancy-white rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg hover:scale-105"
          @click="selectService(service)"
      >
        <i :class="service.icon" class="text-4xl mb-2 icon-color"></i>
        <p class="text-center text-sm font-medium text-gray-700">{{ service.name }}</p>
        <p class="text-center text-xs text-gray-500 mt-1">{{ service.description }}</p>
      </div>
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useServiceSelectionStore } from '~/store/serviceSelection';
import { services, type Service } from '~/services/mockApi';
import IModalContainer from "~/components/shared/IModalContainer.vue";

const emit = defineEmits();
const store = useServiceSelectionStore();
const servicesList = ref<Service[]>([]);

onMounted(() => {
  servicesList.value = services;
});

const selectService = (service: Service) => {
  store.setService(service.name);
  emit('nextStep');
};
</script>

<style scoped>
.bg-fancy-white {
  background-color: #fff; /* Off-white with a warm tone */
}

.icon-color {
  color: #97bf0d; /* Icon color */
}

.transition {
  transition: transform 0.2s, box-shadow 0.2s;
}

.hover\:shadow-lg:hover {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15); /* Fancy shadow effect */
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
