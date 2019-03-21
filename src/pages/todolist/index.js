/**
 * title: MY_TODOLIST
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Table } from 'antd'
import { connect } from 'dva'
// import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale'

import AddInput from './components/AddInput'
import ListContent from './components/ListContent'
import BottomBtns from './components/BottomBtns'

import styles from './index.less'

const allList = [
  {
    id: 1,
    title: 'zhe是标题1'
  },
  {
    id: 2,
    title: '很大机会圣诞节活动'
  },
  {
    id: 3,
    title: '激动死奥红豆杉'
  }
]

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
    console.log('title', title)
  }

  render() {
    // const { todolistManage } = this.props
    // const { todoList } = todolistManage
    return (
      <div className={styles.content}>
        <AddInput handleAddList={this._handleAddList} />
        <ListContent todoList={allList} />
        <BottomBtns todoList={allList} />
      </div>
    )
  }
}

export default connect(({ todolistManage, loading }) => {
  return {
    loading,
    todolistManage
  }
})(TodoList)
