<template>
  <template v-for="(media,idx) in mediaList">
    <BoxItem class="item" :index="idx" :media="media" @itemClick="itemClick"></BoxItem>
  </template>
</template>

<script setup lang="ts">
import BoxItem from './BoxItem.vue'
import type {PropType} from "vue";
import type {Media} from "@/config/Media";
import {SYS_CODE} from "@/config/Media";

const props = defineProps({
  mediaList: {
    type: Array as PropType<Media[]>,
    default: []
  }
})
const itemClick = (index: number) => {
  let media = props.mediaList[index]
  // console.log(index)
  // console.log(media)
  switch (media.code) {
    case SYS_CODE.dsm:
    case SYS_CODE.emby:
    case SYS_CODE.ql_1:
    case SYS_CODE.ql_2:
    case SYS_CODE.ql_9:
    case SYS_CODE.tr:
      window.open(`${window.location.protocol}//${window.location.hostname}:${media.port}`)
      break;
    case SYS_CODE.update_jd:
      break;
    case SYS_CODE.update_jd:
      break;
    default: {
    }
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