import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hotelActions } from '../../../redux/hotels/actions'

const useHotel = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(hotelActions.fetchById(id))
    }, [])
    const hotel = useSelector(state => state.hotel.data)
    return hotel
}

export default useHotel