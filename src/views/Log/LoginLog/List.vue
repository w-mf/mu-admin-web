<template>
  <BaseListContainer
    :list-data="listData"
    :page="pageParams"
    :col-options="colOptions"
    notes="*说明：默认查询为7天内数据"
  >
    <ListSearchBar :col-options="searchOpt" @search="searchHandle" />
  </BaseListContainer>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import BaseListContainer, { IColOption } from '~/components/BaseListContainer.vue';
import ListSearchBar, { IColOption as SearchOpt } from '~/components/ListSearchBar.vue';
import { ApiLogLoginLogGet, ApiLogLoginLogGetResponse, ApiLogLoginLogGetRequest } from '~/api/LogLogin';
import dayjs from 'dayjs';

type ListItem = ApiLogLoginLogGetResponse['list'][number];
type QueryField = keyof ApiLogLoginLogGetRequest;

const listData = ref<ListItem[]>([]);
const pageParams = reactive<Omit<ApiLogLoginLogGetResponse, 'list'>>({
  pageNo: 1,
  pageSize: 20,
  total: 0,
});
async function getData(query = {}) {
  const { pageNo, pageSize } = pageParams;
  const res = await ApiLogLoginLogGet({ pageNo: `${pageNo}`, pageSize: `${pageSize}`, ...query });
  listData.value = res.list || [];
  pageParams.total = res.total;
}

const colOptions = reactive<IColOption<ListItem>[]>([
  {
    field: 'userName',
    title: '登录账号',
    width: 160,
  },
  {
    field: 'equipment',
    title: '登录设备',
  },
  {
    field: 'ip',
    title: '登陆地址',
    width: 160,
  },
  {
    field: 'info',
    title: '登录信息',
  },
  {
    field: 'status',
    title: '登录状态',
    width: 100,
    type: 'tag',
    tagMenu: { 0: { text: '失败', type: 'danger' }, 1: { text: '成功', type: 'success' } },
  },
  {
    field: 'createdAt',
    title: '创建时间',
    width: 180,
    formatter: (val) => dayjs(val).format('YYYY-MM-DD HH:mm:ss'),
  },
]);

const searchOpt = reactive<SearchOpt<QueryField>[]>([
  {
    field: 'userName',
    label: '账号',
    placeholder: '登录账号',
    type: 'input',
  },
  {
    field: 'status',
    label: '状态',
    placeholder: '登录状态',
    type: 'select',
    opt: [
      { value: 1, label: '成功' },
      { value: 0, label: '失败' },
    ],
  },
  {
    field: 'startDate',
    label: '起始时间',
    placeholder: '查询起始时间',
    type: 'date',
  },
  {
    field: 'endDate',
    label: '截止时间',
    placeholder: '查询截止时间',
    type: 'date',
  },
]);
function searchHandle(values: { [key in QueryField]: number | string | boolean }) {
  pageParams.pageNo = 1;
  getData(values);
}
onMounted(() => {
  getData();
});
</script>

<style scoped lang="scss"></style>
