import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import HotelsToursList from './components/HotelToursList'
import HotelMain from './components/HotelMain'
import useToursByHotel from './hooks/useToursByHotel'
import GoogleMap from './components/GoogleMap'


const Hotel = () => {
    let { id } = useParams();
    const tours = useToursByHotel(id)
    const hotel = useSelector(state => state.hotel.data)
    return (
        <div>
            <HotelMain id={id}/>
            <HotelsToursList tours={tours}/>
            <GoogleMap location={hotel?.geometry.location}/>
        </div>
    )
}

export default Hotel