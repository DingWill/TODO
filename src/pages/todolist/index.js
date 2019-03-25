/**
 * title: MY_TODOLIST
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { message } from 'antd'
import { connect } from 'dva'

import AddInput from './components/AddInput'
import ListContent from './components/ListContent'
import BottomBtns from './components/BottomBtns'

import styles from './index.less'

class TodoList extends Component {
  static propTypes = {
    loading: PropTypes.object,
    dispatch: PropTypes.func,
    todolistManage: PropTypes.object
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'todolistManage/queryTodoList'
    })
  }

  _handleAddList = title => {
    // 新增Item
    if (!title) {
      return
    }
    const { todolistManage, dispatch } = this.props
    const { todoList } = todolistManage
    const someItem = (todoList || []).find(item => item.task === title)
    if (someItem) {
      return message.warning('已存在相同名称的List！')
    }
    const newItem = {
      id: (todoList || []).length + 1,
      task: title,
      completed: false
    }
    const newList = [...todoList, newItem]
    dispatch({
      type: 'todolistManage/updateState',
      payload: {
        todoList: newList
      }
    })
  }

  _handleCompletedItem = taskId => {
    // 将Item标为已完成
    if (!taskId) {
      return
    }
    const { todolistManage, dispatch } = this.props
    const { todoList } = todolistManage
    const newList = (todoList || []).map(item => {
      if (item.id === taskId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
    dispatch({
      type: 'todolistManage/updateState',
      payload: {
        todoList: newList
      }
    })
  }

  _handleDeleteItem = taskId => {
    // 删除Item
    if (!taskId) {
      return
    }
    const { todolistManage, dispatch } = this.props
    const { todoList } = todolistManage
    const newList = (todoList || [])
      .filter(item => item.id !== taskId)
      .map((i, index) => {
        return {
          ...i,
          id: index + 1
        }
      })
    dispatch({
      type: 'todolistManage/updateState',
      payload: {
        todoList: newList
      }
    })
  }

  _handleChangeStatus = key => {
    // 更改底部按钮状态
    this.props.dispatch({
      type: 'todolistManage/updateState',
      payload: {
        status: key
      }
    })
  }

  _handleClearCompleted = () => {
    // 清除已完成
    const { todolistManage, dispatch } = this.props
    const { todoList } = todolistManage
    const newList = (todoList || [])
      .filter(item => !item.completed)
      .map((i, index) => {
        return {
          ...i,
          id: index + 1
        }
      })
    dispatch({
      type: 'todolistManage/updateState',
      payload: {
        todoList: newList
      }
    })
  }

  render() {
    const { todolistManage } = this.props
    const { todoList, status } = todolistManage

    const listForStatus = {
      ALL: todoList,
      ACTIVE: (todoList || []).filter(item => !item.completed),
      COMPLETED: (todoList || []).filter(item => item.completed)
    }

    const listParams = {
      todoList: listForStatus[status],
      handleCompleted: this._handleCompletedItem,
      handleDelete: this._handleDeleteItem
    }

    const bottomParams = {
      len: (listForStatus[status] || []).length,
      status,
      changeStatus: this._handleChangeStatus,
      clearComplete: this._handleClearCompleted
    }
    return (
      <React.Fragment>
        <h1 className={styles.mainTitle}>todos</h1>
        <div className={styles.content}>
          <AddInput handleAddList={this._handleAddList} />
          <ListContent {...listParams} />
          <BottomBtns {...bottomParams} />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(({ todolistManage, loading }) => {
  return {
    loading,
    todolistManage
  }
})(TodoList)
