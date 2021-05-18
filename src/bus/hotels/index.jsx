import React from 'react'
import { useParams } from 'react-router-dom'

import HotelsToursList from './components/HotelToursList'
import HotelMain from './components/HotelMain'
import useHotel from './hooks/useHotel'
import useToursByHotel from './hooks/useToursByHotel'
import GoogleMap from './components/GoogleMap'
import AuthBar from '../../global/components/AuthBar'
import Progress from '../../global/components/Progress'


const Hotel = () => {
    let { id } = useParams();
    const {data, isFetching} = useHotel(id)
    const tours = useToursByHotel(id)
    const hotelJSX = <>
        <HotelMain hotel={data}/>
        <HotelsToursList tours={tours}/>
        {/* <GoogleMap location={data?.geometry.location}/> */}
    </>
    return (
        <>
            <AuthBar/>
            {isFetching ? <Progress/> : hotelJSX}
        </>
    )
}

export default Hotel