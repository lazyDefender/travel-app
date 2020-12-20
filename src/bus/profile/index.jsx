import React from 'react'
import {
    CircularProgress,
    Typography,
} from '@material-ui/core'
import { useSelector } from 'react-redux'

import useOrdersByUser from './hooks/useOrdersByUser'
import UserForm from './components/UserForm'
import useAuth from '../../global/hooks/useAuth'
import { Redirect } from 'react-router-dom'
import { book } from '../../navigation/book'
import OrdersList from './components/OrdersList'
import AuthBar from '../../global/components/AuthBar'

const Profile = (props) => {
    const { isFetching } = useSelector(state => state.orders || {})
    const auth = useAuth()
    const id = auth?.id
    const orders = useOrdersByUser(id)
    const ordersJSX = isFetching ? <CircularProgress/> : <OrdersList orders={orders}/>
    const page = <>
                    <AuthBar/>
                    <UserForm/>
                    <Typography>Мої замовлення</Typography>
                    {ordersJSX}
                </>
    const content = auth ? page : <Redirect to={book.root}/>
    return content
}

export default Profile