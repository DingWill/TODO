import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Input, Icon } from 'antd'

import ListItem from '../ListItem'
// import styles from './index.less'

class ListContent extends Component {
  static propTypes = {
    loading: PropTypes.object,
    handleAddList: PropTypes.func,
    todoList: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { todoList } = this.props
    return (
      <div>
        {(todoList || []).map(item => {
          return <ListItem key={item.id} item={item} />
        })}
      </div>
    )
  }
}

export default ListContent
