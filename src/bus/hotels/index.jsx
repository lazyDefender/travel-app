import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import HotelsToursList from './components/HotelToursList'

import HotelMain from './components/HotelMain'
import useToursByHotel from './hooks/useToursByHotel'

const Hotel = () => {
    let { id } = useParams();
    const tours = useToursByHotel(id)
    return (
        <div>
            <HotelMain id={id}/>
            <HotelsToursList tours={tours}/>
        </div>
    )
}

export default Hotel