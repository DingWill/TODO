/**
 * title: USER_TITLE
 */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import HeaderPart from './components/HeaderPart'
import UserInfoPart from './components/UserInfoPart'
import ProjectsPart from './components/ProjectsPart'
import FooterPart from './components/FooterPart'

import styles from './index.less'

function UsersPage(props) {
  const { getCurrentUser } = props
  useEffect(() => {
    getCurrentUser({ id: 19 })
  })

  return (
    <React.Fragment>
      <HeaderPart />
      <section
        className={styles.mainContent}
        style={{
          // height: 'calc(100vh - 70px)'
          height: 'auto'
        }}
      >
        <UserInfoPart />
        <ProjectsPart />
      </section>
      <FooterPart />
    </React.Fragment>
  )
}

UsersPage.propTypes = {
  getCurrentUser: PropTypes.func
}

const mapStateToProps = ({ userInfo }) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: payload => {
      return dispatch({
        type: 'userInfo/getCurrentUser',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
