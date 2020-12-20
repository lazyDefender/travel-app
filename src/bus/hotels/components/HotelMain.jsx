import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import { getPhotoUri } from '../../../global/getPhotoUri'

const HotelMain = ({hotel}) => {
    const {
        name,
        description,
        maxKidsCount,
        maxAdultsCount,
        rating,
        photos,
    } = hotel || {}
    const {photo_reference} = photos ? photos[0] : {}
    const photoUri = getPhotoUri({
        photoRef: photo_reference,
        maxwidth: 1000,
    })
    return (
        <Card>
            <CardMedia
                component="img"
                alt={name}
                height="140"
                image={photo_reference ? photoUri : ''}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Rating
                    name="simple-controlled"
                    value={rating || 0}
                    disabled
                />
            </CardContent>
        </Card>
    )
}

export default HotelMain