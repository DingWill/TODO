import { Component } from 'react'
import PropTypes from 'prop-types'
import { destoryGlobalSpinner } from '../../helpers/view'

class AuthRequiredLayout extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string
    }),
    dispatch: PropTypes.func,
    children: PropTypes.any
  }

  render() {
    const { children } = this.props

    destoryGlobalSpinner()

    return children
  }
}

export default AuthRequiredLayout
