<template>
  <BaseListContainer :list-data="listData" :page="pageParams" :col-options="colOptions">
    <div>
      <ElButton type="primary" @click="showDialog = true">新增</ElButton>
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
import dayjs from 'dayjs';
import { ElMessageBox, ElMessage } from 'element-plus';
import {
  ApiSystemAccountGet,
  ApiSystemAccountIdPatch,
  ApiSystemAccountPost,
  ApiSystemAccountIdDelete,
  ApiSystemAccountPostRequest,
  ApiSystemAccountGetResponse,
  ApiSystemAccountIdResetPasswordPost,
} from '~/api/SysAccount';
import { ApiAuthEncryptionPost } from '~/api/Auth';
import DialogFormContents from './DialogFormContents.vue';

type ListItem = ApiSystemAccountGetResponse['list'][number];
const listData = ref<ListItem[]>([]);
const pageParams = reactive<Omit<ApiSystemAccountGetResponse, 'list'>>({
  pageNo: 1,
  pageSize: 20,
  total: 0,
});
async function getData() {
  const { pageNo, pageSize } = pageParams;
  const res = await ApiSystemAccountGet({ pageNo: `${pageNo}`, pageSize: `${pageSize}` });
  listData.value = res.list || [];
  pageParams.total = res.total;
}

const editId = ref<number | undefined>(); // 编辑情况下 列表项的id。用于编辑状态判断、请求
const showDialog = ref<boolean>(false);
function closeDialog() {
  editId.value = undefined;
  showDialog.value = false;
}
async function submitHandle(data: ApiSystemAccountPostRequest) {
  console.log(data);
  if (editId.value) {
    await ApiSystemAccountIdPatch({ id: `${editId.value}`, ...data });
    ElMessage.success('更新成功');
  } else {
    await ApiSystemAccountPost(data);
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
    await ApiSystemAccountIdDelete({ id: `${data.id}` });
    ElMessage.success('删除成功！');
    await getData();
  });
}
function resetPassword(data: ListItem) {
  ElMessageBox.prompt('重置当前用户密码。', '重置密码', {
    closeOnClickModal: false,
    inputPlaceholder: '默认密码为123456',
    inputValidator: (value: string) => {
      if (value && (value.length < 6 || value.length > 16)) return '密码长度应在[6,16]之间';
      return true;
    },
  }).then(async (res) => {
    if (res.action !== 'confirm') return;
    try {
      const password = res.value && (await ApiAuthEncryptionPost({ str: res.value }));
      await ApiSystemAccountIdResetPasswordPost({ id: `${data.id}`, password });
      ElMessage.success('重置成功！');
    } catch (e) {
      ElMessage.error('重置失败！');
    }
  });
}

const colOptions = reactive<IColOption<ListItem>[]>([
  {
    field: 'userName',
    title: '用户名',
  },
  {
    field: 'name',
    title: '姓名',
  },
  {
    field: 'nickname',
    title: '昵称',
  },
  {
    field: 'email',
    title: '邮箱',
  },
  {
    field: 'mobile',
    title: '手机号',
    width: 120,
  },
  {
    field: 'roleNames',
    title: '角色',
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
    width: 200,
    items: [
      {
        type: 'button',
        label: '重置密码',
        opts: {},
        onClick: resetPassword,
      },
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
