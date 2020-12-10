import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import HotelsToursList from './components/HotelToursList'
import HotelMain from './components/HotelMain'
import useToursByHotel from './hooks/useToursByHotel'
import GoogleMap from './components/GoogleMap'
import { book } from '../../navigation/book'
import AuthBar from '../../global/components/AuthBar'


const Hotel = () => {
    let { id } = useParams();
    const tours = useToursByHotel(id)
    const hotel = useSelector(state => state.hotel.data)
    return (
        <div>
            <AuthBar/>
            <HotelMain id={id}/>
            <HotelsToursList tours={tours}/>
            <GoogleMap location={hotel?.geometry.location}/>
        </div>
    )
}

export default Hotel