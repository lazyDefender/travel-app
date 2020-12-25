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
    } = hotel || {}
    
    const [image, setImage] = useState(null)
    
    const {photo_reference} = photos ? photos[0] : {}

    useEffect(() => {
        const photoUri = getPhotoUri({
            photoRef: photo_reference,
            maxwidth: 1000,
        })
        setImage(photoUri)
    }, [photo_reference])

    const onImageError = (e) => {
        setImage(`${process.env.PUBLIC_URL}/image-not-found.svg`)
        console.log('on image error')
    }

    return (
        <Card>
            <ImageWithFallback
              image={image}
              alt={name}
              title={name}
              onError={onImageError}
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