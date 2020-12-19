import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toursActions } from '../../../redux/tours/actions'
const useToursByHotel = (hotelId) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toursActions.fetchByHotel(hotelId))
    }, [dispatch])
    const tours = useSelector(state => state.tours.data || [])
    return tours
}

export default useToursByHotel