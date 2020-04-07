import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Modal } from 'antd'

import { LIST_TYPE } from '../data'
import styles from './index.less'

const { confirm } = Modal
function Footer({ type, list, updateState, clearCompleted }) {
  const [todoType, setType] = useState('ALL')
  const [count, setCount] = useState(0)

  const listCount = list.length

  useEffect(() => {
    setType(type)
  }, [type])

  useEffect(() => {
    setCount(listCount)
  }, [listCount])

  const onShowConfirm = () => {
    confirm({
      title: 'Do you want to clear these completed items?',
      onOk() {
        clearCompleted()
      }
    })
  }

  return (
    <section className={styles.footerContainer}>
      <p>{count} Items</p>
      <p>
        {LIST_TYPE.map(type => {
          const { key, value } = type
          const isCurrent = key === todoType
          return (
            <Button
              key={key}
              type="link"
              className={isCurrent ? styles.selectedType : null}
              onClick={() => {
                if (isCurrent) {
                  return
                }
                updateState({ type: key })
              }}
            >
              {value}
            </Button>
          )
        })}
      </p>
      <p>{todoType === 'COMPLETED' && <span onClick={onShowConfirm}>Clear Completed</span>}</p>
    </section>
  )
}

Footer.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array,
  updateState: PropTypes.func,
  clearCompleted: PropTypes.func
}

const mapStateToProps = ({ loading, todos }) => {
  return {
    type: todos.type,
    list: todos.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateState: payload => {
      return dispatch({
        type: 'todos/updateState',
        payload
      })
    },
    clearCompleted: payload => {
      return dispatch({
        type: 'todos/clearCompleted',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
