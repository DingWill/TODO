import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Button } from 'antd'

import { someHref } from '../../../../helpers/text'
import styles from './index.less'

const STATUS_BTNS = [
  {
    key: 'ALL',
    value: 'All'
  },
  {
    key: 'ACTIVE',
    value: 'Active'
  },
  {
    key: 'COMPLETED',
    value: 'Completed'
  }
]

class BottomBtns extends Component {
  static propTypes = {
    loading: PropTypes.object,
    len: PropTypes.number,
    status: PropTypes.string,
    changeStatus: PropTypes.func,
    clearComplete: PropTypes.func
  }

  render() {
    const { len, status, changeStatus, clearComplete } = this.props
    return (
      <Row className={styles.bottom}>
        <div>{len} item left</div>
        <div>
          {STATUS_BTNS.map(item => {
            if (item.key === status) {
              return (
                <a href={someHref} key={item.key} className={styles.btnSeleted}>
                  {item.value}
                </a>
              )
            }
            return (
              <a href={someHref} key={item.key} className={styles.btn} onClick={() => changeStatus(item.key)}>
                {item.value}
              </a>
            )
          })}
        </div>
        <div>{status === 'COMPLETED' ? <Button onClick={() => clearComplete()}>Clear Completed</Button> : null}</div>
      </Row>
    )
  }
}

export default BottomBtns
