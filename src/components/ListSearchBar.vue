<template>
  <el-form :inline="true" :model="form" class="list-search-bar">
    <el-form-item v-for="(item, index) of props.colOptions" :key="index" :label="item.label" @keyup.enter="onSearch">
      <el-input v-if="item.type === 'input'" v-model="form[item.field]" :placeholder="item.placeholder" />

      <el-select
        v-else-if="item.type === 'select'"
        v-model="form[item.field]"
        clearable
        :placeholder="item.placeholder"
      >
        <el-option v-for="(i, index) of item.opt" :key="`${i.value}_${index}`" :label="i.label" :value="i.value" />
      </el-select>

      <el-date-picker
        v-else-if="item.type === 'date'"
        v-model="form[item.field]"
        :placeholder="item.placeholder"
        type="date"
        value-format="YYYY-MM-DD"
        :disabled-date="disabledDate"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, withDefaults, onMounted } from 'vue';

export interface IColOption<T> {
  field: T;
  label: string;
  placeholder: string;
  type: 'input' | 'date' | 'select';
  opt?: Array<{ label: string; value: string | number | boolean }>;
}

const props = withDefaults(
  defineProps<{
    colOptions: IColOption<string>[];
  }>(),
  {
    colOptions: () => [],
  },
);

const emit = defineEmits<{
  (event: 'search', form: any): void;
}>();
const form = ref({});

function onSearch() {
  emit('search', form.value);
}
function disabledDate(v: string) {
  return new Date(v).getTime() > Date.now();
}
onMounted(() => {
  // 表单初始值
  const obj: { [key: string]: undefined } = {};
  props.colOptions.forEach((item) => {
    obj[item.field as string] = undefined;
  });
  form.value = obj;
});
</script>

<style lang="scss" scoped>
.list-search-bar {
  margin-bottom: -18px;
}
</style>
