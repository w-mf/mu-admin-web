<template>
  <ElForm ref="ruleFormRef" class="dialog-form" :model="formData" :rules="rules" label-width="80px">
    <ElFormItem label="名称" prop="name" required>
      <ElInput v-model="formData.name" placeholder="请输入名称"></ElInput>
    </ElFormItem>
    <ElFormItem label="菜单" prop="menuIds">
      <div v-if="loadComplete" class="tree-box">
        <ElTree
          style="width: 100%"
          :data="menuTreeData"
          node-key="id"
          show-checkbox
          :default-checked-keys="defaultCheckedKeys"
          :props="{
            label: 'name',
          }"
          @check-change="checkChangeHandle"
        />
      </div>
    </ElFormItem>
    <ElFormItem label="状态" prop="status" required>
      <ElSwitch
        v-model="formData.status"
        inline-prompt
        width="56"
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
import { ApiSystemRoleIdGet, ApiSystemRolePostRequest } from '~/api/SysRole';
import { reactive, ref, onMounted, computed } from 'vue';
import { BOOLEAN_ENUM } from '~/constant/map';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';
import { ApiSystemMenuTreeListGet, ApiSystemMenuTreeListGetResponse } from '~/api/SysMenu';

const props = defineProps<{ id?: number }>();
const emits = defineEmits<{
  (event: 'close'): void;
  (event: 'submit', data: ApiSystemRolePostRequest): void;
}>();

const ruleFormRef = ref<FormInstance>();
const rules = reactive({
  type: [{ required: true, message: '请选择类型', trigger: 'change' }],
  menuIds: [{ required: true, message: '请选择菜单', trigger: 'change' }],
  name: [
    { required: true, message: '请输入名称', trigger: 'change' },
    { max: 64, message: '名称长度不能超过64位', trigger: 'change' },
  ],
  remark: [{ max: 128, message: '备注长度不能超过128位', trigger: 'change' }],
});
const formData = reactive<ApiSystemRolePostRequest>({
  name: '',
  status: BOOLEAN_ENUM.TRUE,
  menuIds: '',
  remark: '',
});

const menuTreeData = ref<ApiSystemMenuTreeListGetResponse>([]);
const checkMenuIds = ref<number[]>([]);
const defaultCheckedKeys = computed(() => {
  const checkNodeIds: number[] = [];
  const hasChildrenCheck = (arr: ApiSystemMenuTreeListGetResponse) => {
    arr.forEach((item) => {
      if (checkMenuIds.value.includes(item.id)) {
        // 只需要最后 一个节点
        if (!item.children || item.children.length === 0) {
          checkNodeIds.push(item.id);
        } else {
          hasChildrenCheck(item.children);
        }
      }
    });
  };
  hasChildrenCheck(menuTreeData.value);
  return checkNodeIds;
});
const loadComplete = ref<boolean>(false);
async function getMenuTreeData() {
  menuTreeData.value = await ApiSystemMenuTreeListGet();
}
function checkChangeHandle(data: ApiSystemMenuTreeListGetResponse[number], checked: boolean, indeterminate: boolean) {
  if (checked || indeterminate) {
    if (!checkMenuIds.value.includes(data.id)) {
      checkMenuIds.value.push(data.id);
    }
  } else if (checkMenuIds.value.includes(data.id)) {
    const idx = checkMenuIds.value.indexOf(data.id);
    checkMenuIds.value.splice(idx, 1);
  }
  formData.menuIds = checkMenuIds.value.join(',');
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
  getMenuTreeData().then();
  if (props.id) {
    try {
      const res = await ApiSystemRoleIdGet({ id: `${props.id}` });
      Object.keys(formData).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(formData, key)) (formData as any)[key] = (res as any)[key];
      });
      checkMenuIds.value = res.menuIds?.split(',').map((item) => +item) || [];
      loadComplete.value = true;
    } catch (e) {
      ElMessage.error('获取数据失败');
      onClose();
    }
  } else {
    loadComplete.value = true;
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
