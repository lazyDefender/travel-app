import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ordersActions } from '../../../redux/orders/actions'


const useOrdersByUser = (userId) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ordersActions.fetchByUser(userId))
    }, [dispatch, userId])
    const orders = useSelector(state => state.orders.data)
    return orders
}

export default useOrdersByUser