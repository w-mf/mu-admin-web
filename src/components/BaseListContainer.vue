<template>
  <div class="base-list-container">
    <div ref="SearchRef" class="base-list-container__search">
      <slot />
    </div>
    <div :class="['base-list-container__table', props.isPage ? '' : 'not-page']">
      <ElTable :key="timestamp" :data="props.listData" stripe row-key="id" :height="tableHeight">
        <template #empty><ElEmpty description="暂无数据" /></template>
        <ElTableColumn
          v-for="(item, index) of props.colOptions"
          :key="item.field || index"
          v-slot="{ row }"
          :prop="item.field"
          :label="item.title"
          :width="item.width"
        >
          <template v-if="item.field">
            <template v-if="(item.formatter && item.formatter(row[item.field])) || row[item.field]">
              {{ item.formatter ? item.formatter(row[item.field]) : row[item.field] }}
            </template>
            <div v-else class="base-list-container__table_cell_empty">-</div>
          </template>
          <template v-for="(i, idx) of item.items" v-else>
            <ElButton
              v-if="i.type === 'button'"
              :key="idx"
              type="text"
              v-bind="i.opts"
              @click="i.onClick && i.onClick(row)"
            >
              {{ i.label }}
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
    </div>
    <div v-if="props.isPage" ref="PaginationRef" class="base-list-container__pagination">
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
// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from 'lodash';
import type { ElTableColumn } from 'element-plus';

export interface IColOption<T> {
  field?: string;
  title: string;
  width?: string | number;
  formatter?: (val: string | number) => string | undefined;
  items?: Array<{
    type: 'button';
    label: string;
    opts?: unknown;
    onClick?: (val: T) => void;
  }>;
}
export interface IPage {
  pageNo: number;
  pageSize: number;
  total: number;
}
const props = withDefaults(
  defineProps<{
    colOptions: IColOption<unknown>[];
    listData: unknown[];
    page?: IPage;
    isPage?: boolean;
  }>(),
  {
    colOptions: () => [],
    listData: () => [],
    page: () => ({
      pageNo: 1,
      pageSize: 10,
      total: 0,
    }),
    isPage: true,
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
const tableHeight = ref<number>(0);

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
@import '../styles/variable.scss';
@import '../styles/mixin.scss';

.base-list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  padding: 0 20px;

  .base-list-container__search {
    flex: 0 0 auto;
    padding: 20px 0;
  }
  .base-list-container__table {
    flex: 1;
    .base-list-container__table_cell_empty {
      color: $secondaty-text;
    }
    &.not-page .el-table__inner-wrapper:before {
      display: none;
    }
  }
  .base-list-container__pagination {
    flex: 0 0 auto;
    padding: 20px 0;
    .el-pagination__sizes {
      margin-left: 16px;
    }
  }
}
</style>
