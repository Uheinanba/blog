import * as userService from '../services/home';

export default {
  namespace: 'home',

  state: {
    list: [],
    total: null,
    page: null,
    name: '',
  },

  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(userService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10) || 20,
          page: parseInt(page, 10),
        },
      });
    },
  },

  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query = {} }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
