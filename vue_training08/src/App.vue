<script setup lang="ts">
  import { computed, ref } from 'vue';
  const nameData = ref<string>("");
  const numberData = ref<number>();
  const addressData = ref<string>("");
  const picked = ref<string>("");
  const inquiry = ref<string>("");
  const isChecked = ref<boolean>(false);

  const nameEmpty = ref<boolean>(true);
  const numberEmpty = ref<boolean>(true);
  const addressEmpty = ref<boolean>(true);
  const pickedEmpty = ref<boolean>(true);
  const inquiryEmpty = ref<boolean>(true);

  const nameError = ref<boolean>(false);
  const numberError = ref<boolean>(false);
  const addressError = ref<boolean>(false);
  const pickedError = ref<boolean>(false);
  const inquiryError = ref<boolean>(false);
  const isCheckedError = ref<boolean>(false);

  const submmitBtn = computed(() => !isFormInvalid.value) 
  const isFormInvalid = computed(() => checkStatus.value.every(error => error === false))

  const emptyCheck = (target:string | number)=>{
    return target === "";
  }

  const nameCheck = ()=>{
    nameError.value = emptyCheck(nameData.value)
    console.log(checkStatus.value)
  }
  const numberCheck = ()=>{
    numberError.value = emptyCheck(numberData.value)
  }
  const addressCheck = ()=>{
    addressError.value = emptyCheck(addressData.value)
  }
  const pickedCheck = ()=>{
    pickedError.value = emptyCheck(picked.value)
  }
  const inquiryCheck = ()=>{
    inquiryError.value = emptyCheck(inquiry.value)
  }
  const isCheckedCheck = ()=>{
    isCheckedError.value = !isChecked.value
  }

  const checkStatus = computed(()=>[nameError.value,nameEmpty.value,numberError.value,numberEmpty.value,addressError.value,addressEmpty.value,pickedError.value,pickedEmpty.value,inquiryError.value,inquiryEmpty.value,isCheckedError.value])
</script>

<template>
  <form action="">

    <div class="form-detail">
      <div class="form-detail--box">
        <label for="" class="detail-label">お名前</label>
        <div>
          <input type="text" class="form-border input-normal input-name" v-model.lazy="nameData" @change="nameCheck">
          <p v-if="nameError" class="error-message">お名前は必須です。</p>
        </div>
      </div>

      <div class="form-detail--box">
        <label for="" class="detail-label">電話番号</label>
        <div>
          <input type="text" class="form-border input-normal" v-model.lazy="numberData" @change="numberCheck">
          <p v-if="numberError" class="error-message">電話番号は必須です。</p>
        </div>
      </div>

      <div class="form-detail--box">
        <label for="" class="detail-label">メールアドレス</label>
        <div>
          <input type="text" class="form-border input-normal" v-model.lazy="addressData" @change="addressCheck">
          <p v-if="addressError" class="error-message">メールアドレスは必須です。</p>
        </div>
      </div>

      <div class="form-detail--box">
        <label for="" class="detail-label">ご希望の連絡方法</label>
        <div>
          <ul>
          <li>
            <input type="radio" class="radio" v-model="picked" value="電話" @change="pickedCheck">
            <span>電話</span>
          </li>

          <li>
            <input type="radio" class="radio" v-model="picked" value="メール" @change="pickedCheck">
            <span>メール</span>
          </li>
        </ul>
        <p v-if="pickedError" class="error-message">ご希望の連絡方法は必須です。</p>
        </div>
      </div>

      <div class="form-detail--box">
        <label for="" class="detail-label">お問い合わせ内容</label>
        <div>
          <textarea name="" id="" class="form-border" v-model.lazy="inquiry" @change="inquiryCheck"></textarea>
          <p v-if="inquiryError" class="error-message">お問い合わせ内容は必須です。</p>
        </div>
      </div>
    </div>

    <div>
      <div class="agree-wrap">
        <input type="checkbox" class="checkbox" v-model="isChecked" @change="isCheckedCheck">
        <p>同意する</p>
      </div>
      <p class="agree-error error-message" v-if="isCheckedError">同意は必須です。</p>
    </div>


    <div class="button-wrap">
      <button :disabled="submmitBtn">送信する</button>
    </div>

  </form>
</template>

<style scoped>
  form{
    width:600px;
    padding:20px;
    display: grid;
    row-gap: 40px;
  }
  .form-detail{
    display: grid;
    row-gap: 40px;
  }
  .form-border{
    border:solid 1px #CCCCCC;
    border-radius:4px;
  }
  .form-detail--box{
    display: grid;
    grid-template-columns: 128px 358px;
    gap:74px;
  }
  .detail-label{
    width:128px;
  }
  .input-normal{
    height:32px;
    width:100%;
  }
  ul{
    display: flex;
    gap:40px;
  }
  li{
    list-style: none;
    display: flex;
  }
  span{
    display: flex;
    align-items: center;
  }
  .agree-wrap{
    display: flex;
    justify-content: center;
  }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width:120px;
    height:40px;
    color:#FFFFFF;
    background-color: #3895FF;
    border-radius: 4px;
    border:none;
  }
  button:disabled{
    background-color: #CCCCCC;
  }
  .button-wrap{
    display: flex;
    justify-content: center;
  }
  textarea{
    height:70px;
    width:100%;
  }
  .checkbox{
    aspect-ratio: 1;
    width:24px;
    border-radius: 4px;
    margin-right:6px;
  }
  .radio{
    aspect-ratio: 1;
    width:24px;
    margin-right: 6px;
  }
  .agree-error{
    text-align: center;
  }
  .error-message{
    color:#FF0202;
    font-size:12px;
  }
</style>
