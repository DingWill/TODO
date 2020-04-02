import { withMixin } from '../../helpers/dva'

import { getList, deleteList, addList, editList } from './service'

export default withMixin({
  namespace: 'hooksTodo',
  state: {
    list: []
  },
  subscriptions: {},
  effects: {
    *queryList({ payload }, { put, call }) {
      const { success, data } = yield call(getList)
      if (!success) {
        return
      }
      yield put({
        type: 'updateState',
        payload: {
          list: data || []
        }
      })
    },
    *addItem({ payload }, { put, call }) {
      const { success, data } = yield call(addList, payload)
      if (!success) {
        return
      }
      yield put({
        type: 'updateState',
        payload: {
          list: data || []
        }
      })
    },
    *editItem({ payload }, { put, call }) {
      const { success, data } = yield call(editList, payload)
      if (!success) {
        return
      }
      yield put({
        type: 'updateState',
        payload: {
          list: data || []
        }
      })
    },
    *deleteItem({ payload }, { put, call }) {
      const { success, data } = yield call(deleteList, payload)
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
