<template>
  <ElForm ref="ruleFormRef" class="dialog-form" :model="formData" :rules="rules" label-width="80px">
    <ElFormItem label="父级节点" prop="parentId">
      <ElCascader
        v-model="formData.parentId"
        :options="menuTreeData"
        clearable
        :props="{
          label: 'name',
          value: 'id',
          expandTrigger: 'hover',
          checkStrictly: true,
          emitPath: false,
        }"
        placeholder="请选择父级节点"
      ></ElCascader>
    </ElFormItem>
    <ElFormItem label="类型" prop="type" required>
      <el-radio-group v-model="formData.type">
        <el-radio v-for="key of Object.keys(TYPE)" :key="key" :label="+key">{{ TYPE[key] }}</el-radio>
      </el-radio-group>
    </ElFormItem>
    <ElFormItem label="名称" prop="name" required>
      <ElInput v-model="formData.name" placeholder="请输入名称"></ElInput>
    </ElFormItem>
    <ElFormItem label="权限码" prop="accessCode" required>
      <ElInput v-model="formData.accessCode" placeholder="请输入权限码"></ElInput>
    </ElFormItem>
    <ElFormItem label="显示" prop="show" required>
      <ElSwitch
        v-model="formData.show"
        inline-prompt
        width="56"
        active-text="显示"
        :active-value="BOOLEAN_ENUM.TRUE"
        inactive-text="隐藏"
        :inactive-value="BOOLEAN_ENUM.FALSE"
      />
    </ElFormItem>
    <ElFormItem label="排序" prop="sort">
      <el-input-number v-model="formData.sort" :min="0" :max="9999" />
    </ElFormItem>
    <ElFormItem style="padding-top: 20px; margin-bottom: 0">
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="onClose">取消</el-button>
    </ElFormItem>
  </ElForm>
</template>

<script lang="ts" setup>
import {
  ApiSystemMenuPostRequest,
  ApiSystemMenuTreeListGet,
  ApiSystemMenuIdGet,
  ApiSystemMenuTreeListGetResponse,
} from '~/api/SysMenu';
import { reactive, ref, onMounted } from 'vue';
import { BOOLEAN_ENUM } from '~/constant/map';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';
import { TYPE_ENUM } from './menu.enum';
import { TYPE } from './menu.constant';

const props = defineProps<{ id?: number }>();
const emits = defineEmits<{
  (event: 'close'): void;
  (event: 'submit', data: ApiSystemMenuPostRequest): void;
}>();

const menuTreeData = ref<ApiSystemMenuTreeListGetResponse>([]);
async function getMenuTreeData() {
  menuTreeData.value = await ApiSystemMenuTreeListGet();
}
const ruleFormRef = ref<FormInstance>();
const rules = reactive({
  type: [{ required: true, message: '请选择类型', trigger: 'change' }],
  name: [
    { required: true, message: '请输入名称', trigger: 'change' },
    { max: 64, message: '名称长度不能超过64位', trigger: 'change' },
  ],
  accessCode: [
    { required: true, message: '请输入权限码', trigger: 'change' },
    { max: 64, message: '权限码长度不能超过64位', trigger: 'change' },
  ],
  sort: [{ type: 'number', message: '格式应为数字' }],
});
const formData = reactive<ApiSystemMenuPostRequest>({
  type: TYPE_ENUM.MENU,
  name: '',
  show: BOOLEAN_ENUM.TRUE,
  sort: undefined,
  parentId: undefined,
  accessCode: '',
});

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
  getMenuTreeData().then();
  if (props.id) {
    try {
      const res = await ApiSystemMenuIdGet({ id: `${props.id}` });
      console.log(res);
      Object.keys(formData).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(formData, key)) (formData as any)[key] = (res as any)[key];
      });
    } catch (e) {
      ElMessage.error('获取数据失败');
      onClose();
    }
  }
});
</script>

<style lang="less"></style>
