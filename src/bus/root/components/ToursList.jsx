import React from 'react'

import ToursListItem from './ToursListItem'


const ToursList = ({tours, hotels}) => {
    return (
        <>
        {tours?.map((tour) => {
            return (
            <ToursListItem {...tour}/>
        )})}
         </>   
    )
}

export default ToursList
