import { createStore } from 'vuex';

const store = createStore<{ permissionCodes: string[] }>({
  state() {
    return {
      permissionCodes: JSON.parse(localStorage.getItem('permissions') || '[]'),
    };
  },
  mutations: {
    SET_PERMISSION_CODES(state, val: string[]) {
      state.permissionCodes = val;
    },
  },
  actions: {
    setPermissionCodes(context, val) {
      localStorage.setItem('permissions', JSON.stringify(val));
      context.commit('SET_PERMISSION_CODES', val);
    },
  },
});
export default store;
