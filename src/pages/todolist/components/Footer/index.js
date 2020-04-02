import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import { LIST_TYPE } from '../data'
import styles from './index.less'

function Footer(props) {
  const [todoType, setType] = useState('ALL')
  return (
    <section className={styles.footerContainer}>
      <p>3 Item</p>
      <p>
        {LIST_TYPE.map(type => {
          const { key, value } = type
          const isCurrent = key === todoType
          return (
            <Button
              key={key}
              type="link"
              className={isCurrent ? styles.selectedType : null}
              onClick={() => {
                if (isCurrent) {
                  return
                }
                setType(key)
              }}
            >
              {value}
            </Button>
          )
        })}
      </p>
      <p>
        {todoType === 'COMPLETED' && (
          <Button
            type="link"
            onClick={() => {
              setType('key')
            }}
          >
            Clear Completed
          </Button>
        )}
      </p>
    </section>
  )
}

Footer.propTypes = {
  list: PropTypes.array,
  queryList: PropTypes.func
}

export default Footer
