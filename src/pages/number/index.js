import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { v4 } from 'uuid'

import styles from './index.less'

const itemWidth = 40
const itemHeight = 40

function NumberPage(props) {
  const [count] = useState(3706)
  const [currentId, setCurrentId] = useState('')
  const countString = String(count).split('')
  // console.log(count, '====count', countString)

  useEffect(() => {
    let timer = null
    timer = setInterval(() => {
      const id = v4()
      setCurrentId(id)
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  // console.log(currentId, '=====currentId')
  const renderNum = value => {
    const yHeight = value * itemHeight
    const scrollClass = 'numbers-scroll' + value
    return (
      <div
        className={classnames(styles.numberList, styles[scrollClass])}
        style={{
          transform: `translateY(-${yHeight}px)`
        }}
        key={currentId}
      >
        <label>0</label>
        <label>1</label>
        <label>2</label>
        <label>3</label>
        <label>4</label>
        <label>5</label>
        <label>6</label>
        <label>7</label>
        <label>8</label>
        <label>9</label>
      </div>
    )
  }
  return (
    <div className={styles.content}>
      {countString.map((item, index) => {
        const value = Number(item)
        return (
          <div
            key={`${index}`}
            style={{
              width: itemWidth,
              height: itemHeight,
              lineHeight: `${itemHeight}px`,
              marginRight: 5,
              fontSize: 26,
              color: '#ffffff',
              backgroundColor: '#0089e9',
              border: '1px solid #f9f9f9'
            }}
          >
            {renderNum(value)}
          </div>
        )
      })}
    </div>
  )
}

export default NumberPage
