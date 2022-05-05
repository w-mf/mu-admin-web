<template>
  <ElForm ref="ruleFormRef" class="dialog-form" :model="formData" :rules="rules" label-width="80px">
    <ElFormItem label="用户名" prop="userName" required>
      <ElInput v-model="formData.userName" placeholder="请输入用户名"></ElInput>
    </ElFormItem>
    <ElFormItem label="姓名" prop="name">
      <ElInput v-model="formData.name" placeholder="请输入姓名"></ElInput>
    </ElFormItem>
    <ElFormItem label="昵称" prop="nickname">
      <ElInput v-model="formData.nickname" placeholder="请输入昵称"></ElInput>
    </ElFormItem>
    <ElFormItem label="邮箱" prop="email">
      <ElInput v-model="formData.email" placeholder="请输入邮箱"></ElInput>
    </ElFormItem>
    <ElFormItem label="手机号" prop="mobile">
      <ElInput v-model="formData.mobile" placeholder="请输入手机号"></ElInput>
    </ElFormItem>
    <ElFormItem label="角色" prop="roleIds">
      <ElSelect v-model="formData.roleIds" multiple placeholder="请选择角色">
        <ElOption v-for="item in roleList" :key="item.value" :label="item.label" :value="item.value" />
      </ElSelect>
    </ElFormItem>
    <ElFormItem label="状态" prop="status" required>
      <ElSwitch
        v-model="formData.status"
        inline-prompt
        :width="56"
        active-text="正常"
        :active-value="BOOLEAN_ENUM.TRUE"
        inactive-text="停用"
        :inactive-value="BOOLEAN_ENUM.FALSE"
      />
    </ElFormItem>
    <ElFormItem label="备注" prop="sort">
      <ElInput v-model="formData.remark" :rows="4" type="textarea" placeholder="备注信息" />
    </ElFormItem>
    <ElFormItem style="padding-top: 20px; margin-bottom: 0">
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="onClose">取消</el-button>
    </ElFormItem>
  </ElForm>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { BOOLEAN_ENUM } from '~/constant/map';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';
import { ApiSystemAccountPostRequest, ApiSystemAccountIdGet } from '~/api/SysAccount';
import { ApiSystemRoleSimpleListGet, ApiSystemRoleSimpleListGetResponse } from '~/api/SysRole';

const props = defineProps<{ id?: number }>();
const emits = defineEmits<{
  (event: 'close'): void;
  (event: 'submit', data: ApiSystemAccountPostRequest): void;
}>();

const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'change' },
    { max: 64, message: '用户名长度不能超过64位', trigger: 'change' },
  ],
  name: [{ max: 64, message: '姓名长度不能超过64位', trigger: 'change' }],
  nickname: [{ max: 64, message: '昵称长度不能超过64位', trigger: 'change' }],
  email: [
    { type: 'email', message: '邮箱格式错误', trigger: ['blur', 'change'] },
    { max: 64, message: '昵称长度不能超过64位', trigger: 'change' },
  ],
  mobile: [
    { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
    { pattern: /^(1[3-9])\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' },
  ],
  roleIds: [{ required: true, message: '请选择角色', trigger: 'change' }],
  remark: [{ max: 128, message: '备注不能超过128位', trigger: 'change' }],
});
const formData = reactive<ApiSystemAccountPostRequest>({
  userName: '',
  name: undefined,
  status: BOOLEAN_ENUM.TRUE,
  roleIds: [],
  nickname: undefined,
  email: undefined,
  mobile: undefined,
  remark: undefined,
});

const roleList = ref<ApiSystemRoleSimpleListGetResponse>([]);
async function getRoleList() {
  roleList.value = await ApiSystemRoleSimpleListGet();
}

async function onSubmit() {
  try {
    await ruleFormRef.value?.validate();
    emits('submit', formData);
  } catch (e) {
    ElMessage.error('填写信息有误，请检查');
  }
}
function onClose() {
  emits('close');
}
onMounted(async () => {
  getRoleList().then();
  if (props.id) {
    try {
      const res = await ApiSystemAccountIdGet({ id: `${props.id}` });
      Object.keys(formData).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(formData, key)) (formData as any)[key] = (res as any)[key];
      });
      formData.roleIds = res.roleList.map((item) => item.id);
    } catch (e) {
      ElMessage.error('获取数据失败');
      onClose();
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../../../styles/variable.scss';
.tree-box {
  width: 100%;
  padding: 15px;
  border: 1px solid $light-border;
  border-radius: 4px;
  max-height: 240px;
  overflow: auto;
}
</style>
