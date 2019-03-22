import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'

import ListItem from '../ListItem'

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
      <Row>
        {(todoList || []).map(item => {
          return <ListItem key={item.id} item={item} />
        })}
      </Row>
    )
  }
}

export default ListContent
