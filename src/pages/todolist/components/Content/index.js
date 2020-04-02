import React from 'react'
import PropTyeps from 'prop-types'
import { Row } from 'antd'

import Item from '../Item'

function Content(props) {
  const { todoList } = props
  return (
    <Row>
      {(todoList || []).map(item => {
        return <Item key={item.id} item={item} />
      })}
    </Row>
  )
}

Content.propTypes = {
  todoList: PropTyeps.array
}

export default Content
