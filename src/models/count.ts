const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default {
  namespace: 'count',
  state: {
    num: 1,
  },
  reducers: {
    add(state: any) {
      state.num += 1;
      // 如果直接return state, dva会认为没有修改state，所有不会刷新
      return { ...state };
    },
  },
  effects: {
    *addAsync(_action: any, { put }: any) {
      yield delay(1000);
      yield put({ type: 'add' });
    },
  },
};
