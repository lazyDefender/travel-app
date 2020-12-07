import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { book } from './book'
import RootPage from '../pages/root'

export const Routes = () => {
    return <>
        <Switch>
            <Route path={book.root}>
                <RootPage />
            </Route>
        </Switch>
    </>
}