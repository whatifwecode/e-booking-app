<template>
  <transition name="fade">
    <div class="fixed top-4 right-4 w-1/4" v-if="isVisible">
      <div class="bg-white rounded-lg shadow-lg p-4 border-2 relative flex items-center">
        <i class="fas fa-info-circle text-gray-400 mr-2"></i>
        <p class="text-center text-gray-600 flex-1">{{ message }}</p>
        <button @click="close" class="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          <i class="fas fa-times"></i>
        </button>
        <div class="absolute bottom-0 left-0 h-0.5 bg-green-500 border-r-2 m-1.5" :style="{ width: progressBarWidth + '%' }"></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const props = defineProps<{
  message: string;
  isVisible: boolean;
  autoCloseDelay?: number;
}>();
const emit = defineEmits(['close']);

const autoCloseDelay = props.autoCloseDelay || 3000;
const progressBarWidth = ref(100);
let intervalId: number | undefined;

const close = () => {
  emit('close');
};

const startProgress = () => {
  const startTime = Date.now();
  intervalId = window.setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const percentage = Math.max(0, 100 - (elapsedTime / autoCloseDelay) * 100);
    progressBarWidth.value = percentage;

    if (percentage === 0) {
      clearInterval(intervalId);
      close();
    }
  }, 10);
};

onMounted(() => {
  if (props.isVisible) {
    startProgress();
  }
});

watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    startProgress();
  } else if (intervalId) {
    clearInterval(intervalId); // Stop the interval if the message is closed
  }
});
</script>

<style scoped>
.fixed {
  z-index: 1000;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px 0 rgba(0, 0, 0, 0.05);
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

button i {
  font-size: 1rem;
}

.text-gray-600 {
  color: #4a5568;
}

i.fa-info-circle {
  font-size: 1.5rem;
}

.bg-green-500 {
  background-color: #81a510be;
}
</style>
