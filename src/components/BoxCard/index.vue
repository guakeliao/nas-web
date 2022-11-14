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
    type: Array as unknown as PropType<Media>,
    default: []
  }
})
const itemClick = (index: number) => {
  let media = medias[index]
  // console.log(index)
  // console.log(media)
  if (media.newOpen) {
    window.open(`${window.location.protocol}//${window.location.hostname}:${media.port}`)
  } else {
    //弹出框
  }
}
</script>

<style scoped>
.item {
  margin: 5px;
  min-width: 300px;
  width: calc(25% - 10px);
  height: 200px;
  display: flex;
  align-items: center;
}
</style>