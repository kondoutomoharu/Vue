<script setup lang="ts">

import { ref,computed } from 'vue';
import TodoLIst from './components/TodoLIst.vue';
import TodoAddForm from './components/TodoAddForm.vue';

type Todo = {
  id: number
  title: string
  completed: boolean
}

const inputTodo = ref("")

const todos = ref<Todo[]>([
  {
    id: 1,
    title: 'Todoのタイトル1',
    completed: true,
  },
  {
    id: 2,
    title: 'Todoのタイトル2',
    completed: false,
  },
  {
    id: 3,
    title: 'Todoのタイトル3',
    completed: false,
  },
]
)

const addTodo = ()=>{
  todos.value = [
    ...todos.value,
    {
      id:todos.value.length+1,
      title:inputTodo.value,
      completed:false,
    }
  ],
  console.log(todos.value)
  inputTodo.value = ""
}

const completeFunc = (todoId:number)=>{
  todos.value = todos.value.map(todo => {
    if(todo.id === todoId){
      return {
        ...todo,
        completed:true,
      }
    }
    return todo
  })
}

function handleClickEvent(payload:{action: string,id?:number}) {
  if (payload.action === '追加') {
    addTodo()
  } else if (payload.action === '削除') {
    deleteFunc(payload.id)
  } else if (payload.action === '完了') {
    completeFunc(payload.id)
  }
}


const deleteFunc = (todoId:number)=>{
  todos.value = todos.value.filter(todo => todo.id !== todoId)
}




const emptyCheck = computed<boolean>(()=>{
  console.log(inputTodo.value)
  return inputTodo.value === ""
})
</script>
<template>
  <div>
    <h2>今日やること</h2>
  </div>

  <TodoAddForm @click-event="handleClickEvent" v-model="inputTodo" :btn-disable="inputTodo === ''"/>

  <TodoLIst :todos="todos" @click-event="handleClickEvent"/>
</template>
<style scoped>
  h2{
    margin-bottom:32px;
    font-size: 24px;
  }
</style>