import { defineStore } from 'pinia';
import { ref } from 'vue';
// eslint-disable-next-line import/no-cycle
import { ApiAuthRefreshTokenPost, ApiAuthLoginPostResponse } from '~/api/Auth';
import { debounce } from 'lodash';

export interface INavTab {
  text: string;
  path: string;
}

export const useAppStore = defineStore(
  'app',
  () => {
    const token = ref<string>('');
    const permissionCodes = ref<string[]>([]);
    const userInfo = ref<ApiAuthLoginPostResponse['accountInfo'] | undefined>();
    const navTabs = ref<INavTab[]>([]);

    const refreshToken = debounce(
      () => {
        ApiAuthRefreshTokenPost().then((res) => {
          token.value = res.accessToken || '';
        });
      },
      10000,
      {
        leading: true,
        trailing: false,
      },
    );
    function setToken(val: string) {
      token.value = val;
    }
    function setPermissionCodes(val: string[]) {
      permissionCodes.value = val;
    }
    function setUserInfo(val: ApiAuthLoginPostResponse['accountInfo'] | undefined) {
      userInfo.value = val;
    }
    function logout() {
      token.value = '';
      permissionCodes.value = [];
      window.location.href = '/login';
    }
    function setNavTabs(val: INavTab[]) {
      navTabs.value = val;
    }
    return {
      token,
      permissionCodes,
      userInfo,
      refreshToken,
      setUserInfo,
      setToken,
      setPermissionCodes,
      logout,
      navTabs,
      setNavTabs,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'app',
          storage: localStorage,
        },
      ],
    },
  },
);
