<template>
  <button
      :type="type"
      :disabled="disabled"
      @click="onClick"
      :class="[
      'py-2 px-4 rounded-md text-white transition-colors duration-200',
      disabled ? 'bg-gray-300' : 'bg-theme-light-blue hover:bg-theme-dark-blue',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  text: string;
  type?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['click']);

const onClick = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
