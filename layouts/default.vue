<template>
  <div>
    <header class="flex justify-end p-4 gap-5">
      <IHomeButton />
      <LangSwitcher />
    </header>
    <NuxtPage />

    <IMessage
        v-if="showMessage"
        :message="fallbackMessage"
        :isVisible="showMessage"
        @close="closeMessage"
    />
  </div>
</template>

<script setup lang="ts">
import LangSwitcher from '~/components/shared/ILangSwitcher.vue';
import IMessage from '~/components/shared/IMessage.vue';
import { useMessageService } from '~/services/messageService';
import IHomeButton from "~/components/shared/IHomeButton.vue";

const { fallbackMessage, showMessage, closeMessage, showMessageFn } = useMessageService();

//TODO MAKE IT IN A DIFFERENT WAY
const { provide } = useNuxtApp();
provide('showMessageFn', showMessageFn);
</script>

<style scoped>
header span {
  cursor: pointer;
}

header span {
  font-weight: bold;
  text-decoration: underline;
}

header {
  color: white;
}
</style>

<style>
/* Global styles can remain here */
body {
  font-family: 'Montserrat', sans-serif;
  user-select: none;
  color: #343434;
  background: linear-gradient(135deg, #749513, #c5c7c8fd, #97bf0d, #81a510be);
  height: 100vh;
}
</style>
