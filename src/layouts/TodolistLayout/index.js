import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, BackTop } from 'antd'

import styles from './index.less'

class TodolistLayout extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string
    }),
    dispatch: PropTypes.func,
    children: PropTypes.any
  }

  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <BackTop />
        <Layout className={styles.layout}>
          <Layout>
            <Layout.Content className={styles.contentContainer}>{children}</Layout.Content>
          </Layout>
        </Layout>
      </React.Fragment>
    )
  }
}

export default TodolistLayout
