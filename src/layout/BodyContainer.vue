<template>
  <div class="body-container__wrap">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {});
</script>

<style scoped lang="scss">
@import '~/styles/variable.scss';
.body-container__wrap {
  flex: 1 1 auto;
  background: #fff;
  padding: 10px 16px;
}
</style>
