import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'

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
      <Input.Search
        placeholder={'What need to be done?'}
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        onSearch={value => this._handleAdd(value)}
        className={styles.search}
        enterButton={false}
      />
    )
  }
}

export default AddInput
