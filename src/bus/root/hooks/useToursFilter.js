import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import fire from '../../../firebase'
import { toursActions } from '../../../redux/tours/actions'

const useToursFilter = (filter) => {
    const dispatch = useDispatch()
    dispatch(toursActions.fetchAsync(filter)) 
}

export default useToursFilter
