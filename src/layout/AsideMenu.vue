<template>
  <div class="aside-menu">
    <div :class="['logo__wrap', props.expand ? '' : 'logo__size--small']">
      <img alt="logo" :src="props.expand ? logoExpand : logoFold" />
    </div>
    <div>
      <ElMenu
        router
        default-active="/home"
        class="not-border"
        background-color="transparent"
        :collapse="!expand"
      >
        <template v-for="(item, index) of menuList" :key="index">
          <!-- 一级 -->
          <ElMenuItem
            v-if="(!item.children || item.children.length === 0) && item.meta && item.meta.isMenu"
            :index="item.path"
          >
            <el-icon v-if="item.meta && item.meta.icon">
              <component :is="(Icon as any)[item.meta.icon as any]" />
            </el-icon>
            <span>{{ item.meta && item.meta.title }}</span>
          </ElMenuItem>
          <!-- 多级 -->
          <ElSubMenu v-else-if="item.meta && item.meta.isMenu" :index="item.path">
            <template #title>
              <el-icon v-if="item.meta && item.meta.icon">
                <component :is="(Icon as any)[item.meta.icon as any]" />
              </el-icon>
              <span>{{ item.meta && item.meta.title }}</span>
            </template>
            <template v-for="(itemB, indexB) of item.children">
              <ElMenuItem
                v-if="itemB.meta && itemB.meta.isMenu"
                :key="index + '_' + indexB"
                :index="itemB.path"
              >
                <el-icon v-if="itemB.meta && itemB.meta.icon">
                  <component :is="(Icon as any)[itemB.meta.icon as any]" />
                </el-icon>
                <span>{{ itemB.meta && itemB.meta.title }}</span>
              </ElMenuItem>
            </template>
          </ElSubMenu>
        </template>
      </ElMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import logoExpand from '~/assets/images/logo-expand.png';
import logoFold from '~/assets/images/logo-fold.png';

import * as Icon from '@element-plus/icons-vue';
import { routes } from '~/routers';

const props = withDefaults(
  defineProps<{
    expand: boolean;
  }>(),
  {
    expand: true,
  },
);
const menuList = computed(() =>
  routes
    .filter((item) => item.meta?.isMenu)
    .map((item) => {
      return {
        ...item,
        children: item.children ? item.children.filter((i) => i.meta?.isMenu) : undefined,
      };
    }),
);
</script>

<style lang="scss">
@import '../styles/variable.scss';

.aside-menu {
  .logo__wrap {
    padding: 20px;
    transition: all $aside-menu-logo-transition-time;

    img {
      height: 40px;
      transition: all $aside-menu-logo-transition-time;
    }

    &.logo__size--small {
      padding: 15px;

      img {
        height: 30px;
      }
    }
  }

  .el-menu {
    --el-menu-text-color: #fff;
  }

  .el-menu--vertical {
    .el-menu-item {
      color: var(--el-text-color-primary);
    }
  }
}
</style>
