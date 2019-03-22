import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input, Icon } from 'antd'

import styles from './index.less'

class AddInput extends Component {
  static propTypes = {
    loading: PropTypes.object,
    handleAddList: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      title: null
    }
  }

  _handleAdd = value => {
    const { handleAddList } = this.props
    const title = value.trim() !== '' ? value.trim() : null
    this.setState({
      title
    })
    handleAddList(title)
  }

  render() {
    return (
      <Row className={styles.addContent}>
        <Input.Search
          placeholder={'What need to be done?'}
          prefix={<Icon type="down" className={styles.icon} />}
          onSearch={value => this._handleAdd(value)}
          className={styles.search}
          enterButton={false}
          suffix={null}
        />
      </Row>
    )
  }
}

export default AddInput
