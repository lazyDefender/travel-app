import React, { useEffect } from 'react'
import { Container, ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase'
import './App.css'

import theme from './theme'
import { store } from './init/store'
import { Routes } from './navigation'
import { history } from './navigation/history'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Container>
            <Routes/>
          </Container>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App
