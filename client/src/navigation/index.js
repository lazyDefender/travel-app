import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { book } from './book'
import RootPage from '../pages/root'
import SignUpPage from '../pages/signup'
import LoginPage from '../pages/login'
import HotelPage from '../pages/hotels'
import ReservationPage from '../pages/reservation'
import ProfilePage from '../pages/profile'

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
            <Route path={book.hotelsById}>
                <HotelPage />
            </Route>
            <Route path={book.reservation}>
                <ReservationPage />
            </Route>
            <Route path={book.profile}>
                <ProfilePage />
            </Route>
        </Switch>
    </>
}