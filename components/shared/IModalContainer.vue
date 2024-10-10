<template>
  <div class="modal-container">
    <div class="modal-content">
      <header class="flex justify-center mb-6">
        <img src="assets/img/logo.png" alt="Hospital Logo" class="h-16" />
      </header>
      <slot></slot>
    </div>
  </div>
</template>


<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05);
  max-width: 700px;
  width: 100%;
  margin: 0 1rem;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 90%;
  }
}
</style>
<script setup lang="ts">
</script>
