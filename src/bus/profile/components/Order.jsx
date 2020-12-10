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
import {
    Rating
} from '@material-ui/lab'
import { Link } from 'react-router-dom'


import { book } from '../../../navigation/book'


const Order = (props) => {
  console.log(props)
    return <>
        <Link to='/'>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            // image={finalPhotoSrc}
            title="Contemplative Reptile"
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