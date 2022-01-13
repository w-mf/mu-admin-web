<template>
  <ElContainer style="height: 100%">
    <ElAside :class="['aside-menu__wrap', isExpandMenu ? '' : 'aside-menu--fold']">
      <AsideMenu :expand="isExpandMenu" />
    </ElAside>
    <ElContainer>
      <ElHeader class="header__wrap">
        <HeaderInfo>
          <ElIcon size="26px" color="#909399" class="header__expandbtn" @click="expandChange">
            <Expand v-if="!isExpandMenu" />
            <Fold v-else />
          </ElIcon>
        </HeaderInfo>
      </ElHeader>
      <ElMain class="main__wrap">
        <el-scrollbar view-class="main__content">
          <PageNav />
          <router-view />
        </el-scrollbar>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Expand, Fold } from '@element-plus/icons';
import AsideMenu from './AsideMenu.vue';
import HeaderInfo from './HeaderInfo.vue';
import PageNav from './PageNav.vue';

const isExpandMenu = ref<boolean>(true);

const expandChange = () => {
  isExpandMenu.value = !isExpandMenu.value;
};
</script>
<style lang="scss">
@import '../styles/mixin.scss';
@import '../styles/variable.scss';

.aside-menu__wrap {
  background-color: $asideMenuBgColor;
  transition: all $asideMenuLogoTransitionTime;
  &.aside-menu--fold {
    width: 60px;
  }
}
.header__wrap {
  background: #fff;
  position: relative;
  z-index: 2;
  @include basicShadow();
  .header__expandbtn {
    cursor: pointer;
  }
}
.main__wrap {
  --el-main-padding: 0;
  display: flex;
  flex-direction: column;
  .main__content {
    padding: 0 $mainPadding $mainPadding;
  }
}
</style>
