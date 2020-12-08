import React from 'react'

import ToursListItem from './ToursListItem'


const ToursList = ({tours, hotels}) => {
    return (
        <>
        {tours?.map((tour) => {
            // const hotelId = tour.hotel.id
            // const hotel = hotels.fin
            return (
            <ToursListItem {...tour}/>
        )})}
         </>   
        
    )
}

export default ToursList
