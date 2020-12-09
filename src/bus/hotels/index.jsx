import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import HotelMain from './components/HotelMain'

const Hotel = () => {
    let { id } = useParams();
    return (
        <div>
            <HotelMain id={id}/>
        </div>
    )
}

export default Hotel