<template>
  <transition name="fade">
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" v-if="isVisible">
      <div class="bg-white rounded-lg shadow-lg p-4 w-1/4 border-2 border-theme-light-blue">
        <h3 class="text-lg font-bold text-center">No Appointments Available</h3>
        <p class="mt-2 text-center">{{ message }}</p>
        <div class="flex justify-end mt-4">
          <button @click="close" class="text-gray-500 hover:text-gray-800">✖</button>
        </div>
      </div>
      <div class="absolute inset-0" @click="close"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  message: string;
  isVisible: boolean;
}>();
const emit = defineEmits();

const close = () => {
  emit('close');
};
</script>

<style scoped>
.fixed {
  z-index: 1000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Custom shadow for the modal */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px 0 rgba(0, 0, 0, 0.05);
}
</style>
