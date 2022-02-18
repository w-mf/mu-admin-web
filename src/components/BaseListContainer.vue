<template>
  <div class="base-list-container">
    <div ref="SearchRef" class="base-list-container__search">
      <slot />
    </div>
    <ElTable
      :key="timestamp"
      :data="props.listData"
      stripe
      class="base-list-container__table"
      :height="tableHeight"
    >
      <template #empty><ElEmpty description="暂无数据" /></template>
      <ElTableColumn
        v-for="item of props.colOptions"
        :key="item.field"
        :prop="item.field"
        :label="item.title"
        :width="item.width"
      />
    </ElTable>
    <div ref="PaginationRef" class="base-list-container__pagination">
      <ElPagination
        background
        layout="prev, pager, next, sizes, total"
        :current-page="props.page.pageNo"
        :page-size="props.page.pageSize"
        :total="props.page.total"
        @size-change="onPageSizeChange"
        @current-change="onPageNoChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { debounce } from 'lodash';

interface IColOption {
  field: string;
  title: string;
  width?: string | number;
}
interface IPage {
  pageNo: number;
  pageSize: number;
  total: number;
}
const props = withDefaults(
  defineProps<{
    colOptions: IColOption[];
    listData: any[];
    page: IPage;
  }>(),
  {
    colOptions: () => [],
    listData: () => [],
    page: () => ({
      pageNo: 1,
      pageSize: 10,
      total: 0,
    }),
  },
);
const emit = defineEmits<{
  (event: 'pageChange', page: Omit<IPage, 'total'>): void;
}>();

const SearchRef = ref<HTMLElement>();

const PaginationRef = ref<HTMLElement>();
const onPageSizeChange = (val: number) => {
  emit('pageChange', { pageNo: props.page.pageNo, pageSize: val });
};
const onPageNoChange = (val: number) => {
  emit('pageChange', { pageNo: val, pageSize: props.page.pageSize });
};
const timestamp = ref();
const tableHeight = ref<number>();

// 动态设置table height
const onWindowResize = debounce(() => {
  const mainHeight = document.getElementById('mainContainer')?.offsetHeight || 0;
  const pageNavHeight = document.getElementById('pageNav')?.offsetHeight || 0;
  const searchHeight = SearchRef.value?.offsetHeight || 0;
  const paginationHeight = PaginationRef.value?.offsetHeight || 0;
  tableHeight.value = mainHeight - pageNavHeight - searchHeight - paginationHeight - 10; // body-container__wrap padding-bottom=10
  timestamp.value = new Date().getTime();
}, 200);
onMounted(() => {
  onWindowResize();
  window.addEventListener('resize', onWindowResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
});
</script>

<style lang="scss">
@import '~/styles/variable.scss';
@import '~/styles/mixin.scss';

.base-list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;

  .base-list-container__search {
    flex: 0 0 auto;
    padding: 20px;
    @include shadow-mixin(3, 'down');
  }

  .base-list-container__table {
    // flex: 1;
    padding: 0 15px;
  }

  .base-list-container__pagination {
    flex: 0 0 auto;
    padding: 20px 5px;
  }
}
</style>
