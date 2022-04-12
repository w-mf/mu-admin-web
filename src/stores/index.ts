import { createStore } from 'vuex';
// eslint-disable-next-line import/no-cycle
import { ApiAuthRefreshTokenPost } from '~/api/Auth';
import { debounce } from 'lodash';

const store = createStore<{ token: string; permissionCodes: string[]; userInfo: object }>({
  state() {
    return {
      token: localStorage.getItem('token') || '',
      permissionCodes: JSON.parse(localStorage.getItem('permissions') || '[]'),
      userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
    };
  },
  mutations: {
    SET_TOKEN(state, val) {
      localStorage.setItem('token', val);
      state.token = val;
    },
    SET_PERMISSION_CODES(state, val: string[]) {
      localStorage.setItem('permissions', JSON.stringify(val));
      state.permissionCodes = val;
    },
    SET_USER_INFO(state, val) {
      localStorage.setItem('userInfo', JSON.stringify(val));
      state.userInfo = val;
    },
  },
  actions: {
    refreshToken: debounce(
      (context) => {
        ApiAuthRefreshTokenPost().then((res) => context.commit('SET_TOKEN', res.accessToken || ''));
      },
      10000,
      {
        leading: true,
        trailing: false,
      },
    ),
    logout(context) {
      context.commit('SET_TOKEN', '');
      context.commit('SET_PERMISSION_CODES', []);
      window.location.href = '/login';
    },
  },
});
export default store;
