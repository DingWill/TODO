import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Input, Icon } from 'antd'
import moment from 'moment'

import styles from './index.less'

function AddItem({ onAddItem }) {
  const [value, setValue] = useState(null)

  const onChange = event => {
    const {
      target: { value: eVal }
    } = event
    const finalText = eVal.trim()
    const title = finalText !== '' ? finalText : null
    setValue(title)
  }

  const _handleAdd = () => {
    if (!value || !onAddItem) {
      return
    }
    const params = {
      id: moment().valueOf(),
      title: value,
      completed: false
    }
    onAddItem(params).then(res => {
      if (res) {
        setValue(null)
      }
    })
  }
  return (
    <Row className={styles.addContent}>
      <Input
        placeholder={'What need to be done?'}
        prefix={<Icon type="down" className={styles.icon} />}
        onPressEnter={_handleAdd}
        className={styles.search}
        value={value}
        onChange={onChange}
      />
    </Row>
  )
}

AddItem.propTypes = {
  onAddItem: PropTypes.func
}

const mapStateToProps = ({ loading, todos }) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: payload => {
      return dispatch({
        type: 'todos/addItem',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
