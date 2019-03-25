import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'

import ListItem from '../ListItem'

class ListContent extends Component {
  static propTypes = {
    loading: PropTypes.object,
    todoList: PropTypes.array,
    handleCompleted: PropTypes.func,
    handleDelete: PropTypes.func
  }

  render() {
    const { todoList, handleCompleted, handleDelete } = this.props
    return (
      <Row>
        {(todoList || []).map(item => {
          return <ListItem key={item.id} item={item} handleCompleted={handleCompleted} handleDelete={handleDelete} />
        })}
      </Row>
    )
  }
}

export default ListContent
