// UserDetail.vue
<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const userId = computed(() => route.params.id);
function goBack(): void {
  router.push("/users");
}
</script>

<template>
  <div>
    <h3>ユーザー情報</h3>
    <p>ユーザーID: {{ userId }}</p>
    <button @click="goBack">ユーザーリストへ戻る</button>
  </div>
</template>
