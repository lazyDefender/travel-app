import React, { useEffect, useState } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import './App.css'

import theme from './theme'
import { Routes } from './navigation'
import { history } from './navigation/history'
import { authActions } from './redux/auth/actions'
import useAuth from './global/hooks/useAuth'

const App = () => {
  const dispatch = useDispatch()
  const { data, isFetching } = useAuth()
  useEffect(() => {
    console.log('app use effect')
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user: ', user)
        dispatch(authActions.getUserDataByUID(user.uid))
      }
      else {
        console.log('not authorized')
        if(isFetching) dispatch(authActions.stopFetching())
      }
      
    });
  }, [dispatch])

  const appJSX = isFetching ?  'loading auth...' : <Routes />
  
  return (
    <ThemeProvider theme={theme}>
        <Router history={history}>
          <CssBaseline/>
          <Container>
            {appJSX}
          </Container>
        </Router>
    </ThemeProvider>
  )
}

export default App
