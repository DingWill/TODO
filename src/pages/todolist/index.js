/**
 * title: TODO_LIST
 */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { AddItem, Content, Footer } from './components/index'
// import Level from './components/Level'
import styles from './index.less'

function TodoList(props) {
  const { queryList } = props
  useEffect(() => {
    console.log('componentDidiMount')
    queryList()
  }, [queryList])
  return (
    <React.Fragment>
      <h1 className={styles.title}>TODOS</h1>
      <div className={styles.container}>
        {/* 添加 todos 组件 */}
        <AddItem />
        {/* todos 列表 */}
        <Content />
        {/* footer 部分 */}
        <Footer />
      </div>
      {/* <Level /> */}
    </React.Fragment>
  )
}

TodoList.propTypes = {
  list: PropTypes.array,
  queryList: PropTypes.func
}

const mapStateToProps = ({ loading, todos }) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    queryList: payload => {
      return dispatch({
        type: 'todos/queryList',
        payload: payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
