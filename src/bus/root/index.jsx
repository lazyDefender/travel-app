import React from 'react'
import { useSelector } from 'react-redux'

import useHotels from '../../global/hooks/useHotels'
import ToursFilterForm from './components/ToursFilterForm'
import ToursList from './components/ToursList'

const Root = () => {
    const foundTours = useSelector(state => state.toursFilter.data)
    return (
        <div>
            <ToursFilterForm/>
            <ToursList tours={foundTours}/>
        </div>
    )
}

export default Root