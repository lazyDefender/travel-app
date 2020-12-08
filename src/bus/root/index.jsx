import React from 'react'
import { useSelector } from 'react-redux'

import useHotels from '../../global/hooks/useHotels'
import ToursFilterForm from './components/ToursFilterForm'
import ToursList from './components/ToursList'

const Root = () => {
    const tours = useSelector(state => state.tours.data)
    // console.log(tours)
    return (
        <div>
            <ToursFilterForm/>
            <ToursList tours={tours}/>
        </div>
    )
}

export default Root