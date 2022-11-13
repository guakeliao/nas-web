<template>
  <el-card class="item" @click="click">
    <div>
      <span>123123</span>
    </div>
    <div>
      <span>123123</span>
    </div>

    <div>
      <span>123123</span>
    </div>

    <div>
      <span>123123</span>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps(['index'])
const emits = defineEmits(['itemClick'])
const click = (e) => {
  emits('itemClick', props.index)
}
</script>

<style scoped>
</style>