import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import { Routes } from './navigation'
import { history } from './navigation/history'

const App = () => {
  return (
    <Router history={history}>
      <Routes></Routes>
    </Router>

  )
}

export default App
