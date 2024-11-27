<template>
  <div class="wrapper">
    <div class="flex flex-row items-baseline gap-5 mb-5">
      <vue-tailwind-datepicker
          v-model="dateValue"
          :open="isDatePickerOpen"
          overlay
          as-single
          use-range
          no-input
      />
      <div v-if="timeSlots.length > 0" class="mt-4">
        <div class="grid grid-cols-3 gap-4 mt-2">
          <div
              v-for="(slot, index) in timeSlots"
              :key="index"
              class="p-4 border rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-fancy-green"
          >
            <div class="flex items-center space-x-2 font-medium text-lg">
              <i class="fas fa-user-md text-theme-light-blue"></i>
              <span>{{ slot.doctor }}</span>
            </div>
            <div class="flex items-center space-x-2 text-sm font-semibold mt-2">
              <i class="fas fa-calendar-day text-theme-light-blue"></i>
              <span>{{ slot.date }}</span>
            </div>

            <div class="flex items-center space-x-2 text-sm font-semibold mt-2">
              <i class="fas fa-coins text-yellow-500"></i>
              <span>{{ slot.price }}€</span>
            </div>

            <div class="mt-4">
              <div
                  v-for="(time, index) in slot.time"
                  :key="index"
                  @click="selectTimeSlot({ ...slot, selectedTime: time })"
                  :class="[
  'p-2 mt-1 border rounded-md cursor-pointer text-center transition-all duration-300',
  selectedTimeSlot?.selectedTime === time && selectedTimeSlot?.doctor === slot.doctor && selectedTimeSlot?.date === slot.date
    ? 'bg-green-100 border-theme-light-green'
    : 'border-gray-300 hover:border-theme-light-green hover:bg-green-100'
]"
                  @mouseenter="hoveredSlot = { doctor: slot.doctor, selectedTime: time, date: slot.date }"
                  @mouseleave="hoveredSlot = null"
                  :style="hoveredSlot?.selectedTime === time && hoveredSlot?.doctor === slot.doctor && hoveredSlot?.date === slot.date
  ? 'box-shadow: 0px 4px 10px rgba(0, 0, 255, 0.2); border-color: #4CAF50;'
  : ''"
              >
                <div class="flex items-center justify-center space-x-2">
                  <i class="fas fa-clock text-gray-500"></i>
                  <span>{{ time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-1.5">
      <IButton @click="next" :disabled="!selectedTimeSlot" text="Next"></IButton>
    </div>
  </div>
  <MessageService v-if="showMessage" :message="fallbackMessage" :isVisible="showMessage" @close="showMessage = false" />
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import MessageService from '../shared/IMessage.vue';
import { useDateSelectionStore } from '~/store/dateSelection';
import { fetchTimeSlotsFromApi } from '~/services/timeSlotService';
import IButton from "~/components/shared/IButton.vue";
import dayjs from 'dayjs';
import { useServiceDetailSelectionStore } from "~/store/serviceDetailSelection";

const emit = defineEmits(['nextStep', 'prevStep']);
const store = useServiceDetailSelectionStore();
const timeSlotStore = useDateSelectionStore();
const today = dayjs().format('YYYY-MM-DD HH:mm:ss');
const dateValue = ref(today);
const isDatePickerOpen = ref(true);

const timeSlots = computed(() => timeSlotStore.timeSlots);
const selectedTimeSlot = computed({
  get: () => timeSlotStore.selectedTimeSlot,
  set: (slot) => timeSlotStore.setSelectedTimeSlot(slot),
});

const hoveredSlot = ref<{ doctor: string; selectedTime: string; date: string } | null>(null);
const showMessage = ref(false);
const fallbackMessage = 'No appointments available for the selected date range.';

const selectedService = computed(() => store.selectedDetailService);

const fetchTimeSlots = async () => {
  if (dateValue.value && selectedService.value) {
    const dateRange = dateValue.value.split('~').map((date) => date.trim());
    const startDate = dayjs(dateRange[0]).format('YYYY-MM-DD');
    const endDate = dayjs(dateRange[1]).format('YYYY-MM-DD');

    if (!dayjs(startDate).isValid() || !dayjs(endDate).isValid()) {
      console.warn('Invalid date range:', dateValue.value);
      timeSlotStore.setTimeSlots([]);
      showMessage.value = true;
      return;
    }

    console.log(`Fetching time slots for date range: ${startDate} to ${endDate}, service: ${selectedService.value}`);

    const slots = await fetchTimeSlotsFromApi(startDate, endDate, selectedService.value);

    console.log('Time slots fetched:', slots);

    if (Array.isArray(slots) && slots.length > 0) {
      timeSlotStore.setTimeSlots(slots);
    } else {
      timeSlotStore.setTimeSlots([]);
      console.warn('No time slots available for the selected date range');
      showMessage.value = true;
    }
  } else {
    console.warn('Missing date or service. Clearing time slots.');
    timeSlotStore.setTimeSlots([]);
  }
};

watch(dateValue, async (newDate, oldDate) => {
  console.log(`Date changed from ${oldDate} to ${newDate}`);
  selectedTimeSlot.value = null;
  showMessage.value = false;
  await fetchTimeSlots();
});

onMounted(() => {
  fetchTimeSlots();
});

const selectTimeSlot = (slot: any) => {
  selectedTimeSlot.value = slot;
};

const next = () => {
  if (dateValue.value && selectedTimeSlot.value) {
    emit('nextStep');
  }
};
</script>

<style scoped>
.bg-fancy-green {
  background-color: #fefefe;
}
.wrapper {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05);
  margin: 0 1rem;
}
</style>
