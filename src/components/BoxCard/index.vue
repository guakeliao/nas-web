<template>
  <template v-for="(media,idx) in medias">
    <BoxItem class="item" :index="idx" :media="media" @itemClick="itemClick"></BoxItem>
  </template>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import BoxItem from './BoxItem.vue'
import medias, {Media} from "@/config/Media";

const props = defineProps({
  medias: {
    type: Array as PropType<Media>,
    default: []
  }
})
const itemClick = (index) => {
  let media = medias[index]
  console.log(index)
  console.log(media)
  window.location.href = `${window.location.protocol}//${window.location.hostname}:${media.port}`
}
</script>

<style scoped>
.item {
  margin: 5px;
  width: calc(25% - 10px);
  height: 200px;
  display: flex;
  align-items: center;
}
</style>