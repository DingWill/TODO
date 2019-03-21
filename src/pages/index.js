import Redirect from 'umi/redirect'

export default () => (
  <Redirect
    to={{
      pathname: '/todolist',
      search: window.location.search
    }}
  />
)
