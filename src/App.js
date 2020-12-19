import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase'
import './App.css'

import theme from './theme'
import { store } from './init/store'
import { Routes } from './navigation'
import { history } from './navigation/history'

const App = () => {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user: ', user)
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <CssBaseline/>
          <Container>
            <Routes/>
          </Container>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App
