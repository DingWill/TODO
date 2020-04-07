import { message } from 'antd'

import { withMixin } from '../../helpers/dva'
import { getList, deleteList, addList, editList, clearCompleted } from './service'

export default withMixin({
  namespace: 'todos',
  state: {
    type: 'ALL',
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
    *addItem({ payload }, { put, call, select }) {
      const { list } = yield select(_ => _.todos)

      const isSame = list.some(i => i.title === payload.title)
      if (isSame) {
        message.error('The task already exists ')
        return
      }

      const { success } = yield call(addList, payload)
      if (!success) {
        message.error('Error')
        return success
      }

      const finalList = [payload, ...list]
      yield put({
        type: 'updateState',
        payload: {
          list: finalList || []
        }
      })
      return success
    },
    *editItem({ payload }, { put, call, select }) {
      const { list } = yield select(_ => _.todos)
      const { success } = yield call(editList, payload)
      if (!success) {
        message.error('Error')
        return
      }
      const finalList = list.map(i => {
        if (i.id === payload.id) {
          return {
            ...i,
            ...payload.opts
          }
        }
        return i
      })
      yield put({
        type: 'updateState',
        payload: {
          list: finalList || []
        }
      })
    },
    *deleteItem({ payload }, { put, call, select }) {
      const { list } = yield select(_ => _.todos)
      const { success } = yield call(deleteList, payload)
      if (!success) {
        message.error('Error')
        return
      }
      const finalList = list.filter(i => i.id !== payload.id)
      yield put({
        type: 'updateState',
        payload: {
          list: finalList || []
        }
      })
    },
    *clearCompleted({ payload }, { put, call, select }) {
      const { list } = yield select(_ => _.todos)
      const { success } = yield call(clearCompleted, payload)
      if (!success) {
        message.error('Error')
        return
      }
      const finalList = list.filter(i => !i.completed)
      yield put({
        type: 'updateState',
        payload: {
          list: finalList || []
        }
      })
    }
  },
  reducers: {}
})
