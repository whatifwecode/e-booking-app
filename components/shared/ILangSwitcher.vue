<template>
  <div class="flex items-center gap-1.5 cursor-pointer" @click="changeLanguage">
    <span class="uppercase text-white">{{ currentLang }}</span>
    <i class="fas fa-globe text-white text-2xl"></i>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale } = useI18n();
const languages = ['en', 'ru', 'et'];
const currentLang = computed(() => locale.value.toUpperCase());
const changeLanguage = () => {
  const currentIndex = languages.indexOf(locale.value);
  const nextIndex = (currentIndex + 1) % languages.length;
  locale.value = languages[nextIndex];
};
</script>
