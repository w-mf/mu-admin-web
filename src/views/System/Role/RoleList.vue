<template>
  <BaseListContainer :list-data="listData" :loading="loading" :page="pageParams" :col-options="colOptions">
    <ListSearchBar :col-options="searchOpt" @search="searchHandle" />
    <div style="margin-top: 18px">
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
  ApiSystemRoleGetResponse,
  ApiSystemRoleGet,
  ApiSystemRolePostRequest,
  ApiSystemRoleIdPatch,
  ApiSystemRolePost,
  ApiSystemRoleIdDelete,
  ApiSystemRoleGetRequest,
} from '~/api/SysRole';
import dayjs from 'dayjs';
import { ElMessageBox, ElMessage } from 'element-plus';
import ListSearchBar, { IColOption as SearchOpt } from '~/components/ListSearchBar.vue';
import DialogFormContents from './DialogFormContents.vue';

type ListItem = ApiSystemRoleGetResponse['list'][number];

type QueryField = keyof Omit<ApiSystemRoleGetRequest, 'pageSize' | 'pageNo'>;
const query = ref<Omit<ApiSystemRoleGetRequest, 'pageSize' | 'pageNo'>>();
const searchOpt = reactive<SearchOpt<QueryField>[]>([
  {
    field: 'name',
    label: '名称',
    placeholder: '角色名称',
    type: 'input',
  },
  {
    field: 'status',
    label: '状态',
    placeholder: '角色状态',
    type: 'select',
    opt: [
      { value: 1, label: '正常' },
      { value: 0, label: '停用' },
    ],
  },
]);
const loading = ref<boolean>(true);
const listData = ref<ListItem[]>([]);
const pageParams = reactive<Omit<ApiSystemRoleGetResponse, 'list'>>({
  pageNo: 1,
  pageSize: 20,
  total: 0,
});
async function getData() {
  loading.value = true;
  try {
    const { pageNo, pageSize } = pageParams;
    const res = await ApiSystemRoleGet({ pageNo: `${pageNo}`, pageSize: `${pageSize}`, ...(query.value || {}) });
    listData.value = res.list || [];
    pageParams.total = res.total;
  } catch (e) {
    //
  }
  loading.value = false;
}
function searchHandle(values: Omit<ApiSystemRoleGetRequest, 'pageSize' | 'pageNo'>) {
  pageParams.pageNo = 1;
  query.value = values;
  getData();
}
const editId = ref<number | undefined>(); // 编辑情况下 列表项的id。用于编辑状态判断、请求
const showDialog = ref<boolean>(false);
function closeDialog() {
  editId.value = undefined;
  showDialog.value = false;
}
async function submitHandle(data: ApiSystemRolePostRequest) {
  console.log(data);
  if (editId.value) {
    await ApiSystemRoleIdPatch({ id: `${editId.value}`, ...data });
    ElMessage.success('更新成功');
  } else {
    await ApiSystemRolePost(data);
    ElMessage.success('添加成功');
  }
  closeDialog();
  await getData();
}

async function editHandle(data: ListItem) {
  editId.value = data.id;
  showDialog.value = true;
}
function delHandle(data: ListItem) {
  ElMessageBox.confirm(`确定删除${data.name}吗？`, '确定删除', {
    type: 'warning',
    confirmButtonText: '删除',
  }).then(async () => {
    await ApiSystemRoleIdDelete({ id: `${data.id}` });
    ElMessage.success('删除成功！');
    await getData();
  });
}

const colOptions = reactive<IColOption<ListItem>[]>([
  {
    field: 'name',
    title: '名称',
  },
  {
    field: 'remark',
    title: '备注',
  },
  {
    field: 'status',
    title: '状态',
    width: 100,
    formatter: (val) => ({ 0: '停用', 1: '正常' }[val]),
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
    width: 140,
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
