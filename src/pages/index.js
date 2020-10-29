import Redirect from 'umi/redirect'

export default () => (
  <Redirect
    to={{
      pathname: '/menus',
      search: window.location.search
    }}
  />
)
