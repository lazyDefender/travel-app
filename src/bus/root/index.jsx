import React from 'react'
import { useSelector } from 'react-redux'
import {
    CircularProgress,
    Backdrop,
} from '@material-ui/core'

import AuthBar from '../../global/components/AuthBar'
import ToursFilterForm from './components/ToursFilterForm'
import ToursList from './components/ToursList'

const Root = () => {
    const foundTours = useSelector(state => state.toursFilter)
    const progressJSX = <Backdrop  open={true} >
    <CircularProgress color="inherit" />
  </Backdrop>
    const toursListJSX = foundTours.data?.length === 0 ? 'За введеними фільтрами турів не знайдено' : <ToursList tours={foundTours.data}/>
    return (
        <div>
            <AuthBar/>
            <ToursFilterForm/>
            {foundTours.isFetching ? progressJSX : toursListJSX}
        </div>
    )
}

export default Root