import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import ReservationForm from './components/ReservationForm'
import { book } from '../../navigation/book'
import AuthBar from '../../global/components/AuthBar'

const Reservation = (props) => {
    const query = new URLSearchParams(useLocation().search)
    const tourId = query.get('tourId')
    return (
        <div>
            <AuthBar/>
            <ReservationForm tourId={tourId}/>
        </div>
    )
}

export default Reservation

