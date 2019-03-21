import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import withRouter from 'umi/withRouter'
import { destoryGlobalSpinner } from '../../helpers/view'

class AuthRequiredLayout extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
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

export default withRouter(
  connect(({ app, users }) => {
    return {
      currentUser: users.currentUser
    }
  })(AuthRequiredLayout)
)
