import { createStore } from 'vuex';
// eslint-disable-next-line import/no-cycle
import { ApiAuthRefreshTokenPost } from '~/api/Auth';
import { debounce } from 'lodash';

const store = createStore<{ token: string; permissionCodes: string[] }>({
  state() {
    return {
      token: localStorage.getItem('token') || '',
      permissionCodes: JSON.parse(localStorage.getItem('permissions') || '[]'),
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
  },
});
export default store;
