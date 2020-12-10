import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating'
import { Link } from 'react-router-dom'
import { book } from '../../../navigation/book';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ToursListItem = ({hotel, adultPrice, kidPrice}) => {
    
  const classes = useStyles();

  const { photos, rating, id } = hotel
  const photoRef = photos ? photos[0].photo_reference : ''
  const finalPhotoSrc = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.REACT_APP_API_KEY}`
  return (
    <Grid item>
      <Link to={`${book.hotels}/${id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={finalPhotoSrc}
              title={hotel.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
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
  );
}

export default ToursListItem