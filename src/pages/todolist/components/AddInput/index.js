import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input, Icon } from 'antd'

import styles from './index.less'

class AddInput extends Component {
  static propTypes = {
    loading: PropTypes.object,
    handleAddList: PropTypes.func
  }

  _handleAdd = event => {
    const { handleAddList } = this.props
    const title = event.target.value.trim() !== '' ? event.target.value.trim() : null
    handleAddList(title)
  }

  render() {
    return (
      <Row className={styles.addContent}>
        <Input
          placeholder={'What need to be done?'}
          prefix={<Icon type="down" className={styles.icon} />}
          onPressEnter={this._handleAdd}
          className={styles.search}
        />
      </Row>
    )
  }
}

export default AddInput
