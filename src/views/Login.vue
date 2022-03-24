<template>
  <div style="width: 300px">
    <ElInput v-model="form.userName" placeholder="用户名" /><br />
    <ElInput v-model="form.password" placeholder="密码" type="password" />
    <br />
    <ElButton @click="loginHandle">登录</ElButton>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';

import { ApiAuthEncryptionPost, ApiAuthLoginPost } from '~/api/Auth';

const store = useStore();
const router = useRouter();
const form = reactive({
  userName: '',
  password: '',
});

async function loginHandle() {
  if (!form.userName || !form.password) {
    ElMessage.error('请填写用户名及密码');
    return;
  }
  let encryptionPassword = '';
  try {
    encryptionPassword = await ApiAuthEncryptionPost({ str: form.password });
  } catch (e) {
    ElMessage.error('服务出错，请重试');
  }
  try {
    const { accessToken } = await ApiAuthLoginPost({
      userName: form.userName,
      password: encryptionPassword,
    });
    ElMessage.success({ message: '登录成功', duration: 1000 });
    store.commit('SET_TOKEN', accessToken);
    await router.push('/home');
  } catch (e) {
    ElMessage.error('账户或密码错误');
  }
}
</script>

<style scoped lang="scss"></style>
