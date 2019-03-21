import PropTypes from 'prop-types'
import Redirect from 'umi/redirect'

import OpenPageLayout from './OpenPageLayout'
import AuthRequiredLayout from './AuthRequiredLayout'
import TodolistLayout from './TodolistLayout'
import { isOpenPages, isTodolistPage } from '../helpers/env'

export default function Layout({ location, route, children }) {
  if (isOpenPages(location.pathname)) {
    return <OpenPageLayout>{children}</OpenPageLayout>
  }
  if (isTodolistPage(location.pathname)) {
    return (
      <AuthRequiredLayout>
        <TodolistLayout>{children}</TodolistLayout>
      </AuthRequiredLayout>
    )
  }
  return (
    <Redirect
      to={{
        pathname: '/o/404',
        search: `?from=${encodeURIComponent(location.pathname)}`
      }}
    />
  )
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  route: PropTypes.any,
  children: PropTypes.any
}
