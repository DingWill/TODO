import { withMixin } from '../../helpers/dva'

import { getTodoList } from './service'

export default withMixin({
  namespace: 'todolist',
  state: {
    list: [],
    status: 'ALL'
  },
  subscriptions: {},
  effects: {
    *queryTodoList({ payload }, { put, call, all, select }) {
      const { success, data } = yield call(getTodoList)
      if (!success) {
        return
      }
      yield put({
        type: 'updateState',
        payload: {
          list: data || []
        }
      })
    }
  },
  reducers: {}
})
