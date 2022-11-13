<script setup lang="ts">
import BoxCard from '@/components/BoxCard/index.vue'
</script>

<template>
  <div class="container">
    <BoxCard class="card"></BoxCard>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.card {
  height: 100%;
  width: 100%;
}
</style>
