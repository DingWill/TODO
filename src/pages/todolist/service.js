import API from '../../helpers/api'

export function getList(opts) {
  return API.get(`/todos`)
}

export function deleteList(opts) {
  return API.delete(`/todos/${opts.id}`)
}

export function addList(opts) {
  return API.post(`/todos`, { ...opts })
}

export function editList({ id, opts }) {
  return API.put(`/todos/edit/${id}`, { ...opts })
}

export function clearCompleted(opts) {
  return API.post(`/todos/clear`, { ...opts })
}
