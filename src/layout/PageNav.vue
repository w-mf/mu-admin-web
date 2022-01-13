<template>
  <ElBreadcrumb class="page-nav">
    <template v-for="item of routeMatched" :key="item.path">
      <ElBreadcrumbItem
        v-if="!['/home'].includes(item.path)"
        :to="!item.redirect || item.path === '/' ? { path: item.path } : undefined"
      >
        {{ item.meta.title }}
      </ElBreadcrumbItem>
    </template>
  </ElBreadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeMatched = computed(() => route.matched);
</script>

<style scoped lang="scss">
@import '~/styles/mixin.scss';
@import '~/styles/variable.scss';
.page-nav {
  height: 44px;
  line-height: 44px;
  flex: 0 0 44px;
}
</style>
