import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import classnames from 'classnames'
import { Row, Icon } from 'antd'

import styles from './index.less'

function Item({ item, editItem, deleteItem }) {
  const { id, title, completed } = item || {}

  const _handleCompleted = () => {
    editItem && editItem({ id, opts: { title, completed: !completed } })
  }

  const _handleDelete = () => {
    deleteItem && deleteItem({ id })
  }

  return (
    <Row className={styles.todoItem}>
      <p className={styles.itemCheck} onClick={_handleCompleted}>
        {completed && <Icon type="check" className={styles.itemCheckIcon} />}
      </p>
      <p className={classnames(styles.itemTitle, completed && styles.itemTitleUnderline)}>{title}</p>
      <p className={styles.itemDelete} onClick={_handleDelete}>
        <Icon type="close" />
      </p>
    </Row>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func
}

const mapStateToProps = ({ todos }) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    editItem: payload => {
      return dispatch({
        type: 'todos/editItem',
        payload: payload
      })
    },
    deleteItem: payload => {
      return dispatch({
        type: 'todos/deleteItem',
        payload: payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
