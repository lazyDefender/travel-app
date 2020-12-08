import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hotelsActions } from '../../redux/hotels/actions'

const useHotels = (hotels) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(hotelsActions.fetchHotels(hotels))
        
    }, [hotels, dispatch])
    const result = useSelector(state => state.hotels.data)
    return result
}

export default useHotels