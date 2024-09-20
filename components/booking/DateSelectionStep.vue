<template>
  <IModalContainer>
    <h2 class="text-lg font-bold text-center">Select Date Range</h2>
    <div class="flex justify-center space-x-4">
      <div>
        <label for="start-date" class="block text-sm font-medium">Start Date</label>
        <input type="date" id="start-date" v-model="startDate" @change="fetchTimeSlots" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label for="end-date" class="block text-sm font-medium">End Date</label>
        <input type="date" id="end-date" v-model="endDate" @change="fetchTimeSlots" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      </div>
    </div>

    <div v-if="timeSlots.length > 0" class="mt-4">
      <h3 class="text-md font-semibold">Available Time Slots:</h3>
      <div class="grid grid-cols-2 gap-2 mt-2">
        <div
            v-for="(slot, index) in timeSlots"
            :key="index"
            @click="selectTimeSlot(slot)"
            :class="['p-2 border rounded-md cursor-pointer', selectedTimeSlot === slot ? 'border-theme-light-blue bg-blue-100' : 'border-gray-300']"
            @mouseenter="hoveredSlot = slot"
            @mouseleave="hoveredSlot = null"
            :style="{ border: hoveredSlot === slot ? '1px solid lightblue' : '' }"
        >
          {{ slot }}
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-1.5">
      <IButton @click="next" :disabled="!selectedTimeSlot" text="Next"></IButton>
    </div>
    <MessageService v-if="showMessage" :message="fallbackMessage" :isVisible="showMessage" @close="showMessage = false" />
  </IModalContainer>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue';
import MessageService from '../shared/IMessage.vue';
import { useDateSelectionStore } from '~/store/dateSelection';
import { fetchTimeSlotsFromApi } from '~/services/timeSlotService'; // Import the time slot service
import IModalContainer from "~/components/shared/IModalContainer.vue";
import IButton from "~/components/shared/IButton.vue";

const emit = defineEmits();
const store = useDateSelectionStore();

const startDate = computed({
  get: () => store.startDate,
  set: (value) => store.setStartDate(value),
});

const endDate = computed({
  get: () => store.endDate,
  set: (value) => store.setEndDate(value),
});

const timeSlots = computed(() => store.timeSlots);
const selectedTimeSlot = computed({
  get: () => store.selectedTimeSlot,
  set: (slot) => store.setSelectedTimeSlot(slot),
});

const hoveredSlot = ref<string | null>(null);
const showMessage = ref(false);
const fallbackMessage = 'No appointments available for the selected date range. Here are some alternatives:';

// Fetch time slots with fallback logic
const fetchTimeSlots = async () => {
  if (startDate.value && endDate.value) {
    const slots = await fetchTimeSlotsFromApi(startDate.value, endDate.value);
    if (slots.length > 0) {
      store.setTimeSlots(slots);
    } else {
      showMessage.value = true;
      const fallbackStart = new Date(startDate.value);
      const fallbackEnd = new Date(endDate.value);
      fallbackStart.setDate(fallbackStart.getDate() - 7);
      fallbackEnd.setDate(fallbackEnd.getDate() + 7);
      const fallbackSlots = await fetchTimeSlotsFromApi(fallbackStart.toISOString().split('T')[0], fallbackEnd.toISOString().split('T')[0]);
      store.setTimeSlots(fallbackSlots);
    }
  } else {
    store.setTimeSlots([]);
  }
};

const selectTimeSlot = (slot: string) => {
  selectedTimeSlot.value = slot;
};

const next = () => {
  if (startDate.value && endDate.value && selectedTimeSlot.value) {
    emit('nextStep');
  }
};
</script>
