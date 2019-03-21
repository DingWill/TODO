import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Button } from 'antd'

import styles from './index.less'

class BottomBtns extends Component {
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
    const len = (todoList || []).length
    return (
      <Row className={styles.bottom}>
        <div>{len} item left</div>
        <div>
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Completed</Button>
        </div>
        <div>
          <Button>Clear Completed</Button>
        </div>
      </Row>
    )
  }
}

export default BottomBtns
