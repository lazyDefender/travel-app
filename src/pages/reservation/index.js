import React from 'react'
import { Redirect } from 'react-router-dom'
import ReservationComponent from '../../bus/reservation'
import useAuth from '../../global/hooks/useAuth'
import { book } from '../../navigation/book'

const Reservation = (props) => {
    const {data, isFetching} = useAuth()
    const loaderJSX = isFetching ? 'loading' : null
    const contentJSX = data && !isFetching ? <ReservationComponent/> : <Redirect to={book.login} /> 
    const jsx = loaderJSX || contentJSX
    return <>
        {jsx}
    </>
}

export default Reservation
