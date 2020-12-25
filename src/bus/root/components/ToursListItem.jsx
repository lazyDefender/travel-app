import React, { useState, useEffect } from 'react'
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
import classnames from 'classnames'

import { book } from '../../../navigation/book'
import { getPhotoUri } from '../../../global/getPhotoUri'
import ImageWithFallback from '../../../global/components/ImageWithFallback'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardMedia: {
        objectFit: 'contain',
  },
})

const ToursListItem = ({hotel, adultPrice, kidPrice}) => {
    
  const classes = useStyles()
  const [image, setImage] = useState(null)

  const { photos, rating, id } = hotel
  const photoRef = photos ? photos[0].photo_reference : ''

  useEffect(() => {
    const finalPhotoSrc = getPhotoUri({
      maxwidth: 450,
      photoRef,
    })
    setImage(finalPhotoSrc)
  }, [photoRef])
  
  const onImageError = (e) => {
    setImage(`${process.env.PUBLIC_URL}/image-not-found.svg`)
  }

  return (
    <Tooltip title={hotel.name} interactive arrow>
      <Grid item>
      <Link to={`${book.hotels}/${id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <ImageWithFallback
              image={image}
              alt={hotel.name}
              title={hotel.name}
              onError={onImageError}
              height="140"
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
