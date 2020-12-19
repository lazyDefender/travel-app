import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reservationActions } from '../../../redux/reservation/actions'

const useTour = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(reservationActions.fetchTour(id))
    }, [dispatch, id])
    const tour = useSelector(state => state.reservation.data)
    return tour
}

export default useTour