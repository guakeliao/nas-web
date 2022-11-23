<script setup lang="ts">
import BoxCard from '@/components/BoxCard/index.vue'
import FormatCk from '@/components/FormatCk/index.vue'
import medias, {Media} from "@/config/Media";
import {ref} from "vue";

const mediaList = ref(new Array<Media>())
medias().then(res => {
  mediaList.value = res
})
</script>

<template>
  <div class="container">
    <BoxCard class="card" :mediaList="mediaList"></BoxCard>
    <FormatCk></FormatCk>
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
