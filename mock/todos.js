export default {
  'get /todos': {
    errorCode: 200,
    success: true,
    data: [
      {
        id: 1,
        task: 'Learn Javascript',
        completed: true
      },
      {
        id: 2,
        task: 'Learn React',
        completed: false
      },
      {
        id: 3,
        task: 'Learn Ant-Design',
        completed: false
      }
    ],
    message: null
  },
  'post /todos': {
    errorCode: 200,
    success: true,
    message: null
  },
  'put /todos/edit/:id': {
    errorCode: 200,
    success: true,
    message: null
  },
  'delete /todos/:id': {
    errorCode: 200,
    success: true,
    message: null
  }
}
