import React, { useRef, useEffect, useState } from 'react'
import { Icon, Button } from 'antd'

import headerImg from '../../../../assets/header.png'
import styles from './index.less'

const DEFAULT_WIDTH = 38
function UserInfoPart(props) {
  const iconTextRef = useRef(null)
  const [wrapWidth, setWrapperWidth] = useState(DEFAULT_WIDTH)
  const [iconWidth, setWidth] = useState(DEFAULT_WIDTH)

  useEffect(() => {
    if (!iconTextRef) {
      return
    }
    const { scrollWidth } = iconTextRef.current
    console.log('=====iconTextRef+++++Width=====', scrollWidth)
    setWidth(DEFAULT_WIDTH + scrollWidth)
  }, [iconTextRef])

  return (
    <div className={styles.userWrapper}>
      {/* 头像部分 */}
      <div className={styles.userHeader}>
        <img src={headerImg} alt="userHeaderImage" />
        <div
          className={styles.iconTip}
          style={{ width: wrapWidth }}
          onMouseOver={() => {
            setWrapperWidth(iconWidth)
          }}
          onMouseLeave={() => {
            setWrapperWidth(DEFAULT_WIDTH)
          }}
        >
          <span className={styles.icon}>
            <Icon type="smile" style={{ color: '#EB4B19', fontSize: 20 }} />
          </span>
          <span className={styles.iconText} ref={iconTextRef}>
            My List Test!!
          </span>
        </div>
      </div>
      {/* 用户信息 */}
      <div className={styles.userInfo}>
        <p className={styles.name}>Chay.Wu</p>
        <p className={styles.domain}>GH-DF</p>
        <p className={styles.desc}>I won't let that happen. We'll do whatever needs to be done.</p>
        <Button type="default" className={styles.editBtn}>
          Edit Profile
        </Button>
        <p className={styles.location}>
          <Icon type="environment" style={{ marginRight: 6 }} />
          ShangHai
        </p>
      </div>
    </div>
  )
}

export default UserInfoPart
