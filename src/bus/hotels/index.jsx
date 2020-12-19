import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
    Backdrop,
    CircularProgress,
} from '@material-ui/core'

import HotelsToursList from './components/HotelToursList'
import HotelMain from './components/HotelMain'
import useHotel from './hooks/useHotel'
import useToursByHotel from './hooks/useToursByHotel'
import GoogleMap from './components/GoogleMap'
import { book } from '../../navigation/book'
import AuthBar from '../../global/components/AuthBar'


const Hotel = () => {
    let { id } = useParams();
    const {data, isFetching} = useHotel(id)
    const tours = useToursByHotel(id)
    const progressJSX = <Backdrop  open={true} >
        <CircularProgress color="inherit" />
    </Backdrop>
    const hotelJSX = <>
        <HotelMain hotel={data}/>
        <HotelsToursList tours={tours}/>
        <GoogleMap location={data?.geometry.location}/>
    </>
    return (
        <>
            <AuthBar/>
            {isFetching ? progressJSX : hotelJSX}
        </>
    )
}

export default Hotel