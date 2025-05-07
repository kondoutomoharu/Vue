<script setup lang="ts">
import { ref } from 'vue'

type Data = {
  firstName:string,
  lastName:string
}

const nameData = ref<Data>({
  firstName:"",
  lastName:""
})

function inputLastName(event:Event){
  if(event.target instanceof HTMLInputElement){
    nameData.value.lastName = event.target.value
  }
}

function inputfirstName(event:Event){
  if(event.target instanceof HTMLInputElement){
    nameData.value.firstName = event.target.value
  }
}

const isOpen = ref<boolean>(false)

function openModal(){
  isOpen.value = true
}

function closeModal(){
  isOpen.value = false
}

function submitName(){
  console.log(nameData.value.lastName + nameData.value.firstName)
}
</script>

<template>
  <button class="open-button"  @click="openModal">モーダルを開く</button>

  <div class="modal" :class="{ 'modal--open': isOpen }">
    <div class="modal__inner">
      <div class="model__header">
        <h1>フォーム</h1>
        <button class="model__close-button" @click="closeModal">閉じる</button>
      </div>

      <form class="form">
        <div class="form__field">
          <label>姓</label>
          <input type="text" @change="inputLastName($event)"/>
          <span>入力した姓の値:{{ nameData.lastName }}</span>
        </div>
        <div class="form__field">
          <label>名</label>
          <input type="text" @change="inputfirstName($event)"/>
          <span>入力した名の値: {{ nameData.firstName }}</span>
        </div>

        <button type="submit" class="form__submit" @click.prevent="submitName">送信する</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
button {
  display: block;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  padding: 8px 16px;
  background-color: #3895ff;
  color: #fff;
  border-radius: 4px;
}

input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal--open {
  display: block;
}

.modal__inner {
  position: relative;
  width: 480px;
  margin: 100px auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
}

.model__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.model__close-button {
  margin-left: auto;
  background-color: #fff;
  border: 1px solid #3895ff;
  color: #3895ff;
  transition: 0.3s;
}

.model__close-button:hover {
  background-color: #3895ff;
  color: #fff;
}

.form {
  display: grid;
  gap: 24px;
}

.form__field {
  display: grid;
  gap: 8px;
}
</style>