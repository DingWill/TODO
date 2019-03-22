import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Icon } from 'antd'

import { someHref } from '../../../../helpers/text'
import styles from './index.less'

class ListItem extends Component {
  static propTypes = {
    loading: PropTypes.object,
    handleAddList: PropTypes.func,
    item: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { item } = this.props
    return (
      <Row className={styles.todoItem}>
        <a href={someHref} className={styles.itemCheck}>
          <Icon type="check" className={styles.itemCheckIcon} />
        </a>
        <p className={styles.itemTitle}>{item.title}</p>
        <a href={someHref} className={styles.itemDelete}>
          <Icon type="close" />
        </a>
      </Row>
    )
  }
}

export default ListItem
