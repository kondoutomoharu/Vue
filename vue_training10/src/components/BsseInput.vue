<script setup lang="ts">

    const emit = defineEmits<{(event:'update:modelValue',value:string):void}>()

    const props = defineProps<{modelValue:string}>()



</script>

<template>
    <input type="text" @input="emit('update:modelValue',($event.target as HTMLInputElement).value)" :value="props.modelValue">
</template>

<style scoped></style>