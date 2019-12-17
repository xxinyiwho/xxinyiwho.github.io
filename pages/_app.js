/**
 * App
 */

// UI
import { MyApp } from 'industry-ui'

// Layout
// import Layout from 'layout'

// Config
import { Theme } from 'config'

export default props => {
  const Layout = ({ children }) => {
    return children
  }

  return <MyApp Layout={Layout} {...props} />
}
