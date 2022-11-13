<template>
  <template v-for="(media,idx) in medias">
    <BoxItem class="item" :index="idx" :media="media" @itemClick="itemClick"></BoxItem>
  </template>
</template>

<script setup>
import BoxItem from './BoxItem.vue'
import medias, {Media} from "@/config/Media";

const props = defineProps({
  medias: {
    type: Array,
    default: []
  }
})
const itemClick = (index) => {
  let media = medias[index]
  console.log(index)
  console.log(media)
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