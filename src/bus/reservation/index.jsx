import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import ReservationForm from './components/ReservationForm'
import AuthBar from '../../global/components/AuthBar'
import useAuth from '../../global/hooks/useAuth'
import { book } from '../../navigation/book'

const Reservation = (props) => {
    const query = new URLSearchParams(useLocation().search)
    const tourId = query.get('tourId')
    const auth = useAuth()
    const content = <div>
                    <AuthBar/>
                    <ReservationForm tourId={tourId}/>
                </div>
    const redirect = <Redirect to={book.login}/>
    return (
        auth ? content : redirect
    )
}

export default Reservation