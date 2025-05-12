<script setup lang="ts">
    type Props ={
        action:string;
        btnDisable?:boolean;
    }
    const props = defineProps<Props>();
    const emit = defineEmits<{
        (event:'clickEvent',payload:string):void
    }>()

</script>

<template>
    <button @click="emit('clickEvent',action)" :disabled="btnDisable">
        <slot />
    </button>
</template>

<style scoped>
      button{
    font-size: 14px;
    color:#FFFFFF;
    width:57px;
    height:32px;
    border-radius:4px;
    border:none;
    background-color: #008CFF;
  }
  button:disabled{
    background-color: #C1C1C1;
  }
</style>