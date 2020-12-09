import React from 'react'
import { useLocation } from 'react-router-dom'

import ReservationForm from './components/ReservationForm'

const Reservation = (props) => {
    const query = new URLSearchParams(useLocation().search)
    const tourId = query.get('tourId')
    console.log(tourId)
    return (
        <div>
            <ReservationForm tourId={tourId}/>
        </div>
    )
}

export default Reservation

