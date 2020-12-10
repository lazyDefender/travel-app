import React from 'react'
import { useSelector } from 'react-redux'
import {
    CircularProgress,
} from '@material-ui/core'

import AuthBar from '../../global/components/AuthBar'
import ToursFilterForm from './components/ToursFilterForm'
import ToursList from './components/ToursList'

const Root = () => {
    const foundTours = useSelector(state => state.toursFilter)
    return (
        <div>
            <AuthBar/>
            <ToursFilterForm/>
            {foundTours.isFetching ? <CircularProgress/> : <ToursList tours={foundTours.data}/>}
            
        </div>
    )
}

export default Root