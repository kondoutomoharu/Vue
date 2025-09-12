<script setup lang="ts">
import { ref, watch } from 'vue';

const inputProduct  = ref<string>("");
const getProducts = ref<Product[]>([]);
const isLoading = ref<boolean>(false);
const isNone = ref<boolean>(false);

watch(inputProduct,
  async (newValue:string)=>{
    isLoading.value = true
    try{
      const response = fetch(`https://api.escuelajs.co/api/v1/products?offset=1&limit=20&title=${newValue}`)
      const data = await (await response).json();
      if (data.length === 0) {
        isNone.value = true
        } else {
          isNone.value = false
      }
      getProducts.value = data
      console.log(data)
    }catch(error){
      console.log(error)
    }finally{
      isLoading.value = false;
    }
  },
  {immediate:true}
)

type Product = {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }
}
</script>

<template>
  <input type="text" class="input" placeholder="商品名を入力してください。" v-model="inputProduct"/>

  <p v-if="isLoading">データ取得中。。。</p>
  <p v-if="isNone">データがありませんでした。</p>
  <ul class="products">
    <li v-for="getProduct in getProducts" :key="getProduct.id">
      <div>
        <img :src="getProduct.images[0]" :alt=getProduct.title />
      </div>
      <h2 class="product-title">
        {{getProduct.title}}
      </h2>
      <span>${{getProduct.description}}</span>
    </li>
  </ul>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}

.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  list-style: none;
}

.product-title {
  font-size: 18px;
  margin-bottom: 12px;
}
</style>