<template>
  <section class="login flex-vertical-center">
    <div class="login-box">
      <div class="login-box__icon flex-vertical-center">
        <ElIcon><User color="#fff" /></ElIcon>
      </div>
      <h3>用户登录</h3>
      <ElForm ref="formRef" :model="form" :rules="rules" size="large" @keyup.enter="loginHandle">
        <ElFormItem prop="userName">
          <ElInput v-model="form.userName" placeholder="用户名" />
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput v-model="form.password" placeholder="密码" type="password" />
        </ElFormItem>
        <ElFormItem prop="imgVerifyCodeValue">
          <el-col :span="14">
            <ElInput v-model="form.imgVerifyCodeValue" placeholder="验证码" />
          </el-col>
          <el-col :span="10">
            <div class="img-code" @click="getImgVerifyCode" @keyup="() => {}" v-html="verifyCodeImg" />
          </el-col>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" @click="loginHandle">登录</ElButton>
        </ElFormItem>
        <!--        <div style="text-align: right"><ElButton type="text">忘记密码</ElButton></div>-->
      </ElForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage, FormInstance } from 'element-plus';
import { User } from '@element-plus/icons-vue';
import { useStore } from 'vuex';

import { ApiAuthEncryptionPost, ApiAuthLoginPost, ApiAuthGetImgVerifyCodePost } from '~/api/Auth';

const store = useStore();
const router = useRouter();
const formRef = ref<FormInstance>();
const form = reactive({
  userName: '',
  password: '',
  imgVerifyCodeUuid: '',
  imgVerifyCodeValue: '',
});
const rules = reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'change' },
    { max: 32, message: '用户名长度不能超过32位', trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { max: 128, message: '密码长度不能超过128位', trigger: 'change' },
  ],
  imgVerifyCodeValue: [
    { required: true, message: '请输入验证码', trigger: 'change' },
    { max: 16, message: '验证码长度不能超过16位', trigger: 'change' },
  ],
});

const verifyCodeImg = ref<string>('');
async function getImgVerifyCode() {
  const res = await ApiAuthGetImgVerifyCodePost();
  form.imgVerifyCodeUuid = res.uuid;
  verifyCodeImg.value = res.img;
}

async function loginHandle() {
  const isValid = await formRef.value
    ?.validate()
    .then(() => true)
    .catch(() => false);
  if (!isValid) return;

  if (!form.imgVerifyCodeUuid) {
    ElMessage.error('请重新获取验证码');
    return;
  }
  let encryptionPassword = '';
  try {
    encryptionPassword = await ApiAuthEncryptionPost({ str: form.password });
  } catch (e) {
    ElMessage.error('服务出错，请重试');
  }
  try {
    const { accessToken, accountInfo } = await ApiAuthLoginPost({
      userName: form.userName,
      password: encryptionPassword,
      verifyCodeUuid: form.imgVerifyCodeUuid,
      verifyCode: form.imgVerifyCodeValue,
    });
    ElMessage.success({ message: '登录成功', duration: 1000 });
    store.commit('SET_TOKEN', accessToken);
    store.commit('SET_USER_INFO', accountInfo);
    await router.push('/home');
  } catch (e) {
    await getImgVerifyCode();
  }
}
onMounted(() => {
  getImgVerifyCode();
});
</script>

<style scoped lang="scss">
.login {
  min-height: 100%;
  .login-box {
    width: 450px;
    box-shadow: 0 10px 34px -15px rgb(0 0 0 / 24%);
    background: #fff;
    padding: 48px;
    margin: 20px 0;
    box-sizing: border-box;
    .login-box__icon {
      width: 80px;
      height: 80px;
      background: #1089ff;
      border-radius: 50%;
      font-size: 30px;
      margin: 0 auto;
    }
    h3 {
      font-size: 28px;
      font-weight: 300;
      text-align: center;
      letter-spacing: 2px;
    }
    .img-code {
      line-height: 1;
    }
    :deep(.el-form--large .el-input__inner) {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
    }
    :deep(.el-form--large .el-button--primary) {
      height: 50px;
      width: 100%;
      line-height: 50px;
      font-size: 15px;
    }
    :deep(.el-form--large .el-button--text) {
      padding: 0;
      text-align: right;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.2;
      margin-top: -20px;
    }
  }
}
</style>
