import React, { useEffect } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import './App.css'

import theme from './theme'
import { Routes } from './navigation'
import { history } from './navigation/history'
import { authActions } from './redux/auth/actions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user: ', user)
      dispatch(authActions.getUserDataByUID(user.uid))
    }
  });
  }, [dispatch])
  
  return (
    <ThemeProvider theme={theme}>
        <Router history={history}>
          <CssBaseline/>
          <Container>
            <Routes/>
          </Container>
        </Router>
    </ThemeProvider>
  )
}

export default App
