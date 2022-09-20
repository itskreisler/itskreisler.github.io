import React from 'react'
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Menu from './components/Menu'
import { appPages } from './pages/urls'
import './custom.scss'
const App = () => {
  return (
    <Router>
      <main>
      {/* <Menu /> */}
      <Routes>
        {appPages.map(({ url, Component }, index) => (
          <Route key={index} path={url} exact={true} element={<Component />} />
        ))
        }

      </Routes>

      </main>
    </Router>
  )
}

export default App
