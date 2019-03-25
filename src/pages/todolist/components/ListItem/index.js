import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Icon } from 'antd'
import { reap } from 'safe-reaper'

import { someHref } from '../../../../helpers/text'
import styles from './index.less'

class ListItem extends Component {
  static propTypes = {
    loading: PropTypes.object,
    item: PropTypes.object,
    handleCompleted: PropTypes.func,
    handleDelete: PropTypes.func
  }

  _handleCompleted = taskId => {
    const { handleCompleted } = this.props
    handleCompleted(taskId)
  }

  _handleDelete = taskId => {
    const { handleDelete } = this.props
    handleDelete(taskId)
  }

  render() {
    const { item } = this.props
    const status = reap(item, 'completed', null)
    const titleClassName = status ? styles.itemTitleUnderline : styles.itemTitle
    return (
      <Row className={styles.todoItem}>
        <a href={someHref} className={styles.itemCheck} onClick={() => this._handleCompleted(item.id)}>
          {status ? <Icon type="check" className={styles.itemCheckIcon} /> : null}
        </a>
        <p className={titleClassName}>{item.task}</p>
        <a href={someHref} className={styles.itemDelete} onClick={() => this._handleDelete(item.id)}>
          <Icon type="close" />
        </a>
      </Row>
    )
  }
}

export default ListItem
