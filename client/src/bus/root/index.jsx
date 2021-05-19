import React from 'react'
import { useSelector } from 'react-redux'
import {
    CircularProgress,
    Backdrop,
    Grid,
} from '@material-ui/core'

import AuthBar from '../../global/components/AuthBar'
import ToursFilterForm from './components/ToursFilterForm'
import ToursList from './components/ToursList'
import ToursFilterNotFound from './components/ToursFilterNotFound'

const Root = () => {
    const foundTours = useSelector(state => state.toursFilter)
    const progressJSX = <Backdrop  open={true} >
    <CircularProgress color="inherit" />
  </Backdrop>
    const toursListJSX = foundTours.data?.length === 0 ? <ToursFilterNotFound/> : <ToursList tours={foundTours.data}/>
    return (
        <div>
            <AuthBar/>
            <ToursFilterForm/>
            <Grid 
                container 
                alignItems="center" 
                justify="center"
            >
                {foundTours.isFetching ? progressJSX : toursListJSX}
            </Grid>
            
        </div>
    )
}

export default Root