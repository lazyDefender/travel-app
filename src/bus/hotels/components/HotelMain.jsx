import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import useHotel from '../hooks/useHotel'


const HotelMain = ({id}) => {
    const hotel = useHotel(id)
    const {
        name,
        description,
        maxKidsCount,
        maxAdultsCount,
        rating,
        photos,
    } = hotel || {}
    const {photo_reference} = photos ? photos[0]: {}
    const photoUri = 
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${process.env.REACT_APP_API_KEY}`
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={photoUri}
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                </CardContent>
                <Rating
                    name="simple-controlled"
                    value={rating || 0}
                    disabled
                />
            </CardActionArea>
        </Card>
    )
}

export default HotelMain