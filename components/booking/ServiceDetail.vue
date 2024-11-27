<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center mb-4">{{ serviceName }}</h2>
    <div class="p-6">
      <div
          v-for="item in serviceItems"
          :key="item.id"
          class="service-item flex justify-between items-center mb-4 p-4 bg-fancy-green rounded-lg shadow-md cursor-pointer hover:border-2 hover:border-blue-500 hover:bg-green-100 transition-all"
          @click="bookService(item)"
      >
        <div>
          <p class="text-lg font-semibold">{{ item.name }}</p>
          <p class="text-sm text-gray-600">{{ item.description }}</p>
        </div>
        <div class="text-right">
          <p class="text-lg font-medium">
            <span class="text-lg flex items-center gap-1.5">
              {{ item.price }}
              <i class="fas fa-euro-sign mr-1"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </IModalContainer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import IModalContainer from "~/components/shared/IModalContainer.vue";
import { fetchServiceItems } from '~/services/mockApi';
import { useServiceDetailSelectionStore } from "~/store/serviceDetailSelection";
import { useServiceSelectionStore } from "~/store/serviceSelection";

const emit = defineEmits();
const store = useServiceDetailSelectionStore();
const selectedMainService = useServiceSelectionStore();
const serviceName = ref(selectedMainService.selectedService);
const serviceItems = ref([]);

onMounted(async () => {
  if (serviceName.value) {
    serviceItems.value = await fetchServiceItems(serviceName.value);
  }
});

const bookService = (service: { name: string; price: number }) => {
  store.setServiceDetail(service.name);
  emit('nextStep');
};
</script>

<style scoped>
.bg-fancy-green {
  background-color: #e8efe8;
}

.service-item {
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
}

.service-item:hover {
  border-color: #4CAF50;
  background-color: #d1e7d1;
}

.text-right {
  text-align: right;
}

.fas.fa-euro-sign {
  color: #4CAF50;
  font-size: 1.4rem;
}
</style>
