import React, { useEffect, useState } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import theme from './theme'
import { Routes } from './navigation'
import { history } from './navigation/history'
import { authActions } from './redux/auth/actions'
import { defaultActions } from './redux/default/actions'
import useAuth from './global/hooks/useAuth'

const App = () => {
  const dispatch = useDispatch()
  const { createdWithEmailAndPassword } = useSelector(state => state.auth)
  const { data, isFetching } = useAuth()
  const [isStart, setIsStart] = useState(true)
  useEffect(() => {
    console.log('app use effect')

    const { pathname } = history.location
    dispatch(defaultActions.setFirstLoadedPage(pathname))

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user: ', user)
        if(createdWithEmailAndPassword || isStart) {
          dispatch(authActions.getUserDataByUID(user.uid))
          setIsStart(false)
        } 
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
        <Router 
        history={history}
        >
          <CssBaseline/>
          <Container>
            {appJSX}
          </Container>
        </Router>
    </ThemeProvider>
  )
}

export default App
