<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

onMounted(() => {});
</script>
<style lang="scss">
@import '~/styles/common.scss';
</style>
