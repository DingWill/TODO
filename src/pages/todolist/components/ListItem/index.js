import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'

// import styles from './index.less'

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
      <div>
        <Checkbox>{item.title}</Checkbox>
      </div>
    )
  }
}

export default ListItem
