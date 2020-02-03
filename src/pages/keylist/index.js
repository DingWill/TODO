import React, { Component } from 'react'
import { Button } from 'antd'
// import moment from 'moment'

import List from './List'

// const myList = ['CK', 'YSL', 'DIOR', 'DFOCUS']

class KeyList extends Component {
  constructor(props) {
    super()
    this.state = {
      list: [{ id: 1, val: 'CK' }, { id: 2, val: 'YSL' }, { id: 3, val: 'DIOR' }, { id: 4, val: 'TF' }],
      val: null
    }
  }

  _onChange = event => {
    const {
      target: { value }
    } = event
    console.log('vv', value)
    this.setState({
      val: value.trim()
    })
  }

  _addItems = () => {
    console.log('1111')
    const { list, val } = this.state
    if (!val || val === '') {
      return
    }
    const newList = [...list, val]
    this.setState({
      val: null,
      list: newList
    })
  }

  _reverseItems = () => {
    const newlist = this.state.list.reverse()
    this.setState({
      list: newlist
    })
  }

  _deleteItems = () => {
    const { list } = this.state
    list.splice(1, 1)
    this.setState({
      list: list
    })
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <p>
          <Button onClick={this._reverseItems} type="primary">
            Reverse
          </Button>
        </p>
        <p>
          <Button onClick={this._deleteItems} type="primary">
            Delete
          </Button>
        </p>
        {list.map((item, index) => {
          return <List key={index} item={item.val} />
        })}
      </div>
    )
  }
}

export default KeyList
