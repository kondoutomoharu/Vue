<script setup lang="ts">
    import BaseButton from './BaseButton.vue';
    type Todo = {
        id: number
        title: string
        completed: boolean
    }
    const props = defineProps<{
        todos:Todo[]
    }>()
    const emit = defineEmits<{
        (event:'clickEvent',payload:{action:string,id:number})
    }>()
    function handleClick(action:string,todoId:number){
        emit('clickEvent',{id:todoId,action})
    }
</script>

<template>
    <div>
        <ul>
            <li v-for="todo in props.todos" :key="todo.id">
                <div>
                    <p :class="{completed:todo.completed}">{{ todo.title }}</p>
                </div>

                <div class="button-wrap">
                    <BaseButton @click-event="handleClick('削除',todo.id)" action="削除" class="deleteBtn">削除</BaseButton>
                    <BaseButton @click-event="handleClick('完了',todo.id)" action="完了" :btnDisable="todo.completed">完了</BaseButton>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
  li{
    border-bottom: solid #C1C1C1 1px;
    padding:8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:327px;
    font-size:16px;
  }
  .button-wrap{
    display: flex;
    gap:20px;
  }
  .completed{
    text-decoration: line-through;
  }
  .deleteBtn{
    background-color: #FF3700;
  }
</style>