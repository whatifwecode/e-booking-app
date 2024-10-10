<template>
  <div class="home-button">
    <button @click="goHome" class="flex items-center space-x-2">
      <i class="fas fa-home"></i>
      <span>{{ homeLabel }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from 'nuxt/app';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const goHome = () => {
  navigateTo('/dashboard');
};

const homeLabel = computed(() => t('Home'));
</script>

<style scoped>
.home-button button {
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.home-button button:hover {

}

</style>
