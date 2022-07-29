import React from 'react'
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Menu from './components/Menu'
import { appPages } from './pages/urls'

const App = () => {
  return (
    <Router>
      <main className="container-fluid">
      <Menu />
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
