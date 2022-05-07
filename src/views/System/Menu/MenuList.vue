<template>
  <BaseListContainer :list-data="treeData" :loading="loading" :is-page="false" :col-options="colOptions">
    <div>
      <ElButton plain type="primary" @click="showDialog = true">新增</ElButton>
    </div>
  </BaseListContainer>
  <ElDialog
    v-model="showDialog"
    :title="`${editId ? '修改' : '新增'}`"
    destroy-on-close
    :close-on-click-modal="false"
    width="550px"
    draggable
    custom-class="dialog-not-footer"
  >
    <DialogFormContents :id="editId" @submit="submitHandle" @close="closeDialog" />
  </ElDialog>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import BaseListContainer, { IColOption } from '~/components/BaseListContainer.vue';
import {
  ApiSystemMenuTreeListGet,
  ApiSystemMenuIdDelete,
  ApiSystemMenuTreeListGetResponse,
  ApiSystemMenuPostRequest,
  ApiSystemMenuPost,
  ApiSystemMenuIdPatch,
} from '~/api/SysMenu';
import dayjs from 'dayjs';
import { ElMessageBox, ElMessage } from 'element-plus';
import DialogFormContents from './DialogFormContents.vue';

const treeData = ref<ApiSystemMenuTreeListGetResponse>([]);
const loading = ref<boolean>(true);
async function getData() {
  loading.value = true;
  try {
    const res = await ApiSystemMenuTreeListGet();
    const sortHandle = (list: ApiSystemMenuTreeListGetResponse) => {
      list.sort((a, b) => (a.sort || 0) - (b.sort || 0));
      list.forEach((item) => {
        if (item.children) sortHandle(item.children);
      });
    };
    sortHandle(res);
    treeData.value = res;
    loading.value = false;
  } catch (e) {
    //
  }
  loading.value = false;
}

const editId = ref<number | undefined>(); // 编辑情况下 列表项的id。用于编辑状态判断、请求
const showDialog = ref<boolean>(false);
function closeDialog() {
  editId.value = undefined;
  showDialog.value = false;
}
async function submitHandle(data: ApiSystemMenuPostRequest) {
  console.log(data);
  if (editId.value) {
    await ApiSystemMenuIdPatch({ id: `${editId.value}`, ...data });
    ElMessage.success('更新成功');
  } else {
    await ApiSystemMenuPost(data);
    ElMessage.success('添加成功');
  }
  closeDialog();
  await getData();
}

async function editHandle(data: ApiSystemMenuTreeListGetResponse[number]) {
  editId.value = data.id;
  showDialog.value = true;
}
function delHandle(data: ApiSystemMenuTreeListGetResponse[number]) {
  ElMessageBox.confirm(`确定删除${data.name}吗？`, '确定删除', {
    type: 'warning',
    confirmButtonText: '删除',
  }).then(async () => {
    await ApiSystemMenuIdDelete({ id: `${data.id}` });
    ElMessage.success('删除成功！');
    await getData();
  });
}

const colOptions = reactive<IColOption<ApiSystemMenuTreeListGetResponse[number]>[]>([
  {
    field: 'name',
    title: '名称',
  },
  {
    field: 'accessCode',
    title: '权限码',
  },
  {
    field: 'type',
    title: '类型',
    formatter: (val) => ({ 1: '菜单', 2: '按钮' }[val]),
  },
  {
    field: 'show',
    title: '是否显示',
    formatter: (val) => ({ 0: '否', 1: '是' }[val]),
  },
  {
    field: 'sort',
    title: '排序',
    width: 100,
  },
  {
    field: 'createdAt',
    title: '创建时间',
    width: 180,
    formatter: (val) => dayjs(val).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    field: 'updatedAt',
    title: '更新时间',
    width: 180,
    formatter: (val) => dayjs(val).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '操作',
    items: [
      {
        type: 'button',
        label: '修改',
        opts: {},
        onClick: editHandle,
      },
      {
        type: 'button',
        label: '删除',
        opts: {},
        onClick: delHandle,
      },
    ],
  },
]);

onMounted(() => {
  getData();
});
</script>

<style scoped lang="scss"></style>
