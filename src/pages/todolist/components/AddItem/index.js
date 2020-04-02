import React from 'react'
import PropTyeps from 'prop-types'
import { Row, Input, Icon } from 'antd'

import styles from './index.less'

function AddItem({ onAddItem }) {
  const _handleAdd = event => {
    const {
      target: { value }
    } = event
    const finalText = value.trim()
    const title = finalText !== '' ? finalText : null
    onAddItem && onAddItem(title)
  }
  return (
    <Row className={styles.addContent}>
      <Input
        placeholder={'What need to be done?'}
        prefix={<Icon type="down" className={styles.icon} />}
        onPressEnter={_handleAdd}
        className={styles.search}
      />
    </Row>
  )
}

AddItem.propTypes = {
  onAddItem: PropTyeps.func
}

export default AddItem
