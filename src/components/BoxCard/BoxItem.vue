<template>
  <el-card class="item" @click="click">
    <div>
      <span>{{ media.name }}</span>
    </div>
    <div>
      <span>{{ media.ip }}</span>
    </div>
    <div>
      <span>{{ media.description }}</span>
    </div>
  </el-card>
</template>

<script setup>
import {Media} from "@/config/Media";

const props = defineProps({
  index: {type: Number, default: 0},
  media: {type: Media, default: null}
})
const emits = defineEmits(['itemClick'])
const click = (e) => {
  emits('itemClick', props.index)
}
</script>

<style scoped>
</style>