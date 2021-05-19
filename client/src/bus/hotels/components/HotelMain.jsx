import React, { useState, useEffect } from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import { getPhotoUri } from '../../../global/getPhotoUri'
import ImageWithFallback from '../../../global/components/ImageWithFallback'

const HotelMain = ({hotel}) => {
    const {
        name,
        description,
        maxKidsCount,
        maxAdultsCount,
        rating,
        photos,
        image,
    } = hotel || {}

    return (
        <Card>
            <ImageWithFallback
              image={image?.source}
              alt={name}
              title={name}
              height="300"
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