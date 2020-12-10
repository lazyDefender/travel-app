import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useHotels from '../../global/hooks/useHotels'
import { book } from '../../navigation/book'
import ToursFilterForm from './components/ToursFilterForm'
import ToursList from './components/ToursList'

const Root = () => {
    const foundTours = useSelector(state => state.toursFilter.data)
    return (
        <div>
            <Link to={book.signup}>Зареєструватись</Link>
            <Link to={book.login}>Увійти</Link>
            <ToursFilterForm/>
            <ToursList tours={foundTours}/>
        </div>
    )
}

export default Root