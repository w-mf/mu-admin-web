<template>
  <div>
    <router-link to="/login">login</router-link>
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
    home<br />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ApiSystemMenuListGet } from '~/api/SysMenu';

onMounted(async () => {
  const menuTree = await ApiSystemMenuListGet();
  console.log(menuTree);
});
</script>

<style scoped lang="scss"></style>
