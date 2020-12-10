import React from 'react'
import {
    Typography,
    Card,
    CardActions,
    CardMedia,
    CardActionArea,
    CardContent,
    Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { book } from '../../../navigation/book'

const Order = (props) => {
    const { photos } = props
    const photoRef = photos ? photos[0].photo_reference : ''
    const finalPhotoSrc = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.REACT_APP_API_KEY}`
  
    return <>
        <Link to={`${book.hotels}/${props.hotel.id}`}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={finalPhotoSrc}
            title={props.hotel.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.hotel.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              К-сть дорослих - {props.adultsCount}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              К-сть дітей - {props.kidsCount}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Про готель
          </Button>
        </CardActions>
      </Card>
    </Link>
    </>
}
export default Order