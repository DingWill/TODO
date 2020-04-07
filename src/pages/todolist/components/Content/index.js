import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row } from 'antd'

import Item from '../Item'

function Content({ list, type }) {
  const [todoList, setList] = useState([])
  useEffect(() => {
    if (type === 'ALL') {
      setList(list)
    } else if (type === 'ACTIVE') {
      setList(list.filter(i => !i.completed))
    } else {
      setList(list.filter(i => i.completed))
    }
  }, [list, type])

  return (
    <Row>
      {(todoList || []).map(item => {
        return <Item key={item.id} item={item} />
      })}
    </Row>
  )
}

Content.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array
}

const mapStateToProps = ({ loading, todos }) => {
  return {
    type: todos.type,
    list: todos.list
  }
}

export default connect(mapStateToProps)(Content)
