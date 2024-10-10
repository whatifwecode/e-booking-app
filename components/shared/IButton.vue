<template>
  <button
      :type="buttonType"
      :disabled="disabled"
      @click="onClick"
      :class="[
      'py-2 px-4 rounded-md text-white transition-colors duration-200 shadow-lg',
      disabled ? 'bg-gray-300' : 'bg-gradient-to-r from-[#749513] via-[#97bf0d] to-[#81a510be] hover:opacity-80',
    ]"
  >
    {{ translatedText }}
  </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  text: string;
  buttonType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}>();

const emit = defineEmits(['click']);
const { t } = useI18n();
const translatedText = computed(() => t(props.text));
const onClick = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>
