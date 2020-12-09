import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { book } from '../../../navigation/book'

const HotelToursList = ({tours}) => {
    return <>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="center">Тривалість</TableCell>
            <TableCell align="center">За 1 дорослого</TableCell>
            <TableCell align="center">За 1 дитину</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tours.map((tour) => (
            <TableRow key={tour.id}>
                <TableCell align="center">{tour.duration} ночей</TableCell>
                <TableCell align="center">{tour.adultPrice}$</TableCell>
                <TableCell align="center">{tour.kidPrice}$</TableCell>
                <TableCell align="center">
                    <Link to={`${book.reservation}?tourId=${encodeURIComponent(tour.id)}`}>
                        Забронювати
                    </Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
}

export default HotelToursList
