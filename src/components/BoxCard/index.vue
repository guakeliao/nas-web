<template>
  <template v-for="i in 10">
    <BoxItem class="item" :index="i" @itemClick="itemClick"></BoxItem>
  </template>
</template>

<script setup>
import BoxItem from './BoxItem.vue'

const itemClick = (index) => {
  console.log(index)
}
</script>

<style scoped>
.item {
  width: 25%;
  height: 200px;
}
</style>