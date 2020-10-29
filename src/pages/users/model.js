// import { message } from 'antd'

import { withMixin } from '../../helpers/dva'
import { getCurrentUser } from '../../services/user'

export default withMixin({
  namespace: 'userInfo',
  state: {
    currentUser: {}
  },
  subscriptions: {},
  effects: {
    *getCurrentUser({ payload }, { put, call }) {
      console.log(payload, '=======payload')
      const { success, data } = yield call(getCurrentUser, payload)
      if (!success) {
        return
      }
      yield put({
        type: 'updateState',
        payload: {
          currentUser: data || {}
        }
      })
    }
  },
  reducers: {}
})
