<template>
  <div class="modal-container">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// No specific logic, just a container for slot content.
</script>

<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  width: 100%;
  margin: 0 1rem;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 90%;
  }
}
</style>
