<script setup lang="ts">
    import { onUnmounted,ref } from 'vue';
    onUnmounted(()=>{
        console.log("子コンポーネントが削除されました。")
    })
</script>

<template>
    <div>子コンポーネントです。</div>
</template>