import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toursActions } from '../../../redux/tours/actions'

const useTours = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toursActions.fetchAll())
    }, [dispatch])
    const tours = useSelector(state => state.tours)
    return tours
}

export default useTours