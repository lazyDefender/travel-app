import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

import { store } from './init/store'
import { Routes } from './navigation'
import { history } from './navigation/history'
import { book } from './navigation/book'

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes/>
      </Router>
    </Provider>
  )
}

export default App
