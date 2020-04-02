import React from 'react'
import PropTypes from 'prop-types'
import { Row, Icon } from 'antd'

import styles from './index.less'

function Item(props) {
  const { item } = props
  const { id, task, completed } = item

  const _handleCompleted = () => {
    console.log('id', id)
  }

  const _handleDelete = () => {
    console.log('id', id)
  }

  const titleClassName = completed ? styles.itemTitleUnderline : styles.itemTitle
  return (
    <Row className={styles.todoItem}>
      <p className={styles.itemCheck} onClick={_handleCompleted}>
        {completed && <Icon type="check" className={styles.itemCheckIcon} />}
      </p>
      <p className={titleClassName}>{task}</p>
      <p className={styles.itemDelete} onClick={_handleDelete}>
        <Icon type="close" />
      </p>
    </Row>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
