

<script setup lang="ts">
import { ref } from 'vue'

type Person = {
  name: string
  age: number
}

const personData = ref<Person>({name:"近藤",age:25});
</script>
<template>
  <p>名前: {{ personData.name }}</p>
  <p>年齢: {{ personData.age }}</p>
</template>