import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { book } from '../../../navigation/book'
import { getPhotoUri } from '../../../global/getPhotoUri'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

const ToursListItem = ({hotel, adultPrice, kidPrice}) => {
    
  const classes = useStyles()

  const { photos, rating, id } = hotel
  const photoRef = photos ? photos[0].photo_reference : ''
  const finalPhotoSrc = getPhotoUri({
    maxwidth: 450,
    photoRef,
  })

  return (
    <Tooltip title={hotel.name} interactive arrow>
      <Grid item>
      <Link to={`${book.hotels}/${id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={hotel.name}
              height="140"
              image={finalPhotoSrc}
              title={hotel.name}
              onError={(e) => console.log('img error', e)}
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                {hotel.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                1 дор - {adultPrice}$
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                1 дит - {kidPrice}$
              </Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                disabled
              />
            </CardContent>
          </CardActionArea>
          
        </Card>
      </Link>
    </Grid>
    </Tooltip>
  )
}

export default ToursListItem
