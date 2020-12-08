import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import fire from '../../../firebase'
import { citiesActions } from '../../../redux/cities/actions'

const useCities = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(citiesActions.fetchAsync())
    }, [dispatch])
    const cities = useSelector(state => state.cities)
    return cities
}

export default useCities
