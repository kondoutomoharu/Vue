<script setup lang="ts">
    import BaseButton from './BaseButton.vue';
    import BaseInput from './BsseInput.vue';
    import { computed,ref } from 'vue';

    const props = defineProps<{
        modelValue:string
        btnDisable:boolean
    }>()

    const emit = defineEmits<{
        (event:'clickEvent',payload:{action:string}):void
        (event: 'update:modelValue', value: string): void
    }>()

    const localValue = computed({
        get: () => props.modelValue,
        set: (val: string) => emit('update:modelValue', val)
    })
</script>
    
<template>
    <div class="input-wrap">
        <BaseInput v-model="localValue"/>
        <BaseButton :btnDisable="btnDisable" @click-event="emit('clickEvent',{action:'追加'})" action="追加">追加</BaseButton>
    </div>
</template>

<style scoped>
    .input-wrap{
        width:327px;
        display: flex;
        justify-content: space-between;
        gap:20px;
        margin-bottom:32px;
        input{
        width:250px;
        }
    }
</style>