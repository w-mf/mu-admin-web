<template>
  <div class="body-container__wrap">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  //
});
</script>

<style scoped lang="scss">
@import '../styles/variable.scss';

.body-container__wrap {
  flex: 1;
  padding: 0 16px 10px;
}
</style>
