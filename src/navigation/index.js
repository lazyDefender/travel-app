import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { book } from './book'
import RootPage from '../pages/root'
import SignUpPage from '../pages/signup'
import LoginPage from '../pages/login'

export const Routes = () => {
    return <>
        <Switch>
            <Route exact path={book.root}>
                <RootPage />
            </Route>
            <Route path={book.signup}>
                <SignUpPage />
            </Route>
            <Route path={book.login}>
                <LoginPage />
            </Route>
        </Switch>
    </>
}