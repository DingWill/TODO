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
  componentDidMount() {
    const { queryList } = this.props
    queryList()
  }

  _handleAddList = title => {
    // 新增Item
    if (!title) {
      return
    }
    const { list, updateState } = this.props
    const someItem = (list || []).find(item => item.task === title)
    if (someItem) {
      return message.warning('已存在相同名称的List！')
    }
    const newItem = {
      id: (list || []).length + 1,
      task: title,
      completed: false
    }
    const newList = [...list, newItem]
    updateState({ list: newList })
  }

  _handleCompletedItem = taskId => {
    // 将Item标为已完成
    if (!taskId) {
      return
    }
    const { list, updateState } = this.props
    const newList = (list || []).map(item => {
      if (item.id === taskId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })

    updateState({ list: newList })
  }

  _handleDeleteItem = taskId => {
    // 删除Item
    if (!taskId) {
      return
    }
    const { list, updateState } = this.props
    const newList = (list || [])
      .filter(item => item.id !== taskId)
      .map((i, index) => {
        return {
          ...i,
          id: index + 1
        }
      })
    updateState({ list: newList })
  }

  _handleChangeStatus = key => {
    // 更改底部按钮状态
    const { updateState } = this.props
    updateState({ status: key })
  }

  _handleClearCompleted = () => {
    // 清除已完成
    const { list, updateState } = this.props
    const newList = (list || [])
      .filter(item => !item.completed)
      .map((i, index) => {
        return {
          ...i,
          id: index + 1
        }
      })
    updateState({ list: newList })
  }

  render() {
    const { list, status } = this.props

    const listForStatus = {
      ALL: list,
      ACTIVE: (list || []).filter(item => !item.completed),
      COMPLETED: (list || []).filter(item => item.completed)
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

TodoList.propTypes = {
  loading: PropTypes.object,
  list: PropTypes.array,
  status: PropTypes.string,
  updateState: PropTypes.func,
  queryList: PropTypes.func
}

const mapStateToProps = ({ loading, todolist }) => {
  return {
    loading,
    list: todolist.list,
    status: todolist.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateState: payload => {
      return dispatch({
        type: 'todolist/updateState',
        payload: payload
      })
    },
    queryList: payload => {
      return dispatch({
        type: 'todolist/queryTodoList',
        payload: payload
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
