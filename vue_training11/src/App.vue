<script setup lang="ts">
import { onMounted,ref,onUpdated } from "vue";
import ChildComponent from "./components/ChildComponent.vue";
  onMounted(()=>{
    console.log("Hello Vue!")
  })
  const booleanValue = ref<boolean>(true)
  onUpdated(()=>{
    console.log("値が更新されました。")
  })
</script>

<template>
  <p>親コンポーネントです。</p>
  <p v-if="booleanValue">表示されました</p>
  <p v-if="!booleanValue">非表示になりました。</p>
  <button @click="booleanValue = !booleanValue">ボタン</button>
  <ChildComponent v-if="booleanValue"/>
</template>