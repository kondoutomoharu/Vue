<script setup lang="ts">
  import { useTemplateRef } from 'vue';
  const videoRef = useTemplateRef<HTMLVideoElement | null>('vioRef')

  const playVideo = ()=>{
    videoRef.value.play()
  }
  const pauseVideo = ()=>{
    videoRef.value.pause()
  }
</script>

<template>
  <video src="https://videos.pexels.com/video-files/27545637/12164137_1920_1080_60fps.mp4" ref="vioRef"></video>

  <button @click="playVideo">再生</button>
  <button @click="pauseVideo">停止</button>
</template>

<style scoped>
video {
  width: 100%;
}
</style>