<script setup lang="ts">

import { ref,computed } from 'vue';

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
      id:todos.value.length,
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

  <div class="input-wrap">
    <input type="text" @input="inputTodo = $event.target.value" :value="inputTodo">
    <button :disabled="emptyCheck" @click="addTodo">追加</button>
  </div>

  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
          <div>
            <p :class="{completed:todo.completed}">{{ todo.title }}</p>
          </div>

          <div class="button-wrap">
            <button class="deleteBtn" @click="deleteFunc(todo.id)">削除</button>
            <button @click="completeFunc(todo.id)" :disabled="todo.completed">完了</button>
          </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  h2{
    margin-bottom:32px;
    font-size: 24px;
  }
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
  .deleteBtn{
    background-color: #FF3700;
  }

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

  li{
    border-bottom: solid #C1C1C1 1px;
    padding:8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:327px;
    font-size:16px;
  }

  .completed{
    text-decoration: line-through;
  }

  .button-wrap{
    display: flex;
    gap:20px;
  }
</style>