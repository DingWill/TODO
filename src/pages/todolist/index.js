/**
 * title: HOOKS_TODO_LIST
 */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { AddItem, Content, Footer } from './components/index'
import styles from './index.less'

function HookList(props) {
  const { list, queryList } = props
  console.log(list, '===list')
  useEffect(() => {
    console.log('componentDidiMount')
    queryList()
  }, [queryList])
  return (
    <React.Fragment>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.container}>
        {/* 添加 todos 组件 */}
        <AddItem />
        {/* todos 列表 */}
        <Content todoList={list} />
        {/* footer 部分 */}
        <Footer />
      </div>
    </React.Fragment>
  )
}

HookList.propTypes = {
  list: PropTypes.array,
  queryList: PropTypes.func
}

const mapStateToProps = ({ loading, hooksTodo }) => {
  return {
    list: hooksTodo.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    queryList: payload => {
      return dispatch({
        type: 'hooksTodo/queryList',
        payload: payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HookList)
