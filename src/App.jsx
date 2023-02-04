import React from 'react'
import { HashRouter as Router, Routes } from 'react-router-dom'
import './custom.scss'
import { TagAppContext } from './context/AppContext'
import tagAppPages from './pages/TagAppPages'
import Menu from './components/Menu'
const App = () => {
  return (
    <Router>
      <TagAppContext>
        <main>
          <Menu />
          <Routes>{tagAppPages()}</Routes>
        </main>
      </TagAppContext>
    </Router>
  )
}

export default App
