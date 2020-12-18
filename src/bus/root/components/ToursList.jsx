import React from 'react'
import {
    Grid,
} from '@material-ui/core'
import ToursListItem from './ToursListItem'


const ToursList = ({tours}) => {
    return (
        <Grid 
            container 
            direction="row"
            justify="space-between"
        >
        {tours?.map((tour) => {
            return (
            <ToursListItem key={tour.id} {...tour}/>
        )})}
         </Grid>   
    )
}

export default ToursList
