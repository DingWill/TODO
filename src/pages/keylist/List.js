import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

class List extends Component {
  constructor(props) {
    super()
    console.log('====list item constructor====')
  }

  componentDidMount() {
    console.log('====list item componentDidMount====')
  }

  componentDidUpdate() {
    console.log('====list item componentDidUpdate====')
  }

  render() {
    const { item } = this.props
    console.log('====list item render====')
    return (
      <div style={{ backgroundColor: 'antiquewhite', marginTop: 20, padding: 15 }}>
        <p>{item}</p>
        <p />
        <Input />
      </div>
    )
  }
}

List.propTypes = {
  item: PropTypes.string
}

export default List
