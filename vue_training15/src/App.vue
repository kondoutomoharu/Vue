<script setup lang="ts">
import { ref, computed } from "vue";
import TodoAddForm from "./components/TodoAddForm.vue";
import TodoLIst from "./components/TodoList.vue";
import axios from "axios";
import { onMounted } from "vue";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const data = ref<Todo[] | null>(null);
const error = ref<string | null>(null);
const userId = computed(() => (data.value ? data.value.length : 0));

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    data.value = response.data;
    console.log(response.data);
  } catch (error) {
    error.value = error.message;
    return;
  }

  error.value = "エラーが発生しました";
}

async function postData() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: inputTodo.value.title,
        completed: inputTodo.value.completed,
        userId: 1, // 任意の固定値でOK
      }
    );
    console.log("送信データ:", inputTodo.value);
    console.log("サーバーからのレスポンス:", response.data);
  } catch (error) {
    console.log(error);
  }
}

async function putData(id: number) {
  const target = data.value?.find((todo) => todo.id === id);
  if (!target) return;

  const updateData = {
    ...target,
    completed: true,
  };
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      updateData
    );
  } catch (error) {
    console.error("更新に失敗しました。", error);
  }
}

async function deleteData(id: number) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

const inputTodo = ref({
  title: "",
  completed: false,
  id: userId.value,
});

const todos = ref<Todo[]>([
  {
    id: 1,
    title: "Todoのタイトル1",
    completed: true,
  },
  {
    id: 2,
    title: "Todoのタイトル2",
    completed: false,
  },
  {
    id: 3,
    title: "Todoのタイトル3",
    completed: false,
  },
]);

const addTodo = () => {
  (data.value = [
    ...data.value,
    {
      id: data.value.length + 1,
      title: inputTodo.value.title,
      completed: false,
    },
  ]),
    postData();
  inputTodo.value = {
    title: "",
    completed: false,
    id: 0,
  };
};

const completeFunc = (todoId: number) => {
  putData(todoId);
  data.value = data.value.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        completed: true,
      };
    }
    return todo;
  });
};

function handleClickEvent(payload: { action: string; id?: number }) {
  if (payload.action === "追加") {
    addTodo();
  } else if (payload.action === "削除") {
    deleteFunc(payload.id);
  } else if (payload.action === "完了") {
    completeFunc(payload.id);
  }
}

const deleteFunc = async (todoId: number) => {
  await deleteData(todoId);

  data.value = data.value.filter((todo) => todo.id !== todoId);
};

const emptyCheck = computed<boolean>(() => {
  console.log(inputTodo.value);
  return inputTodo.value.title === "";
});

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div>
    <h2>今日やること</h2>
  </div>

  <TodoAddForm
    @click-event="handleClickEvent"
    v-model="inputTodo.title"
    :btn-disable="inputTodo.title === ''"
  />

  <TodoLIst :todos="data" @click-event="handleClickEvent" v-if="data" />
  <p v-else-if="error">エラーが発生しました</p>
  <p v-else>読み込み中...</p>
</template>
<style scoped>
h2 {
  margin-bottom: 32px;
  font-size: 24px;
}
</style>
