export const getPhotoUri = ({
    photoRef,
    maxwidth,
}) => {
    const base = `https://maps.googleapis.com/maps/api/place/photo`
    const params = new URLSearchParams({
        maxwidth,
        photoreference: photoRef,
        key: process.env.REACT_APP_API_KEY
    })
    const uri = `${base}?${params}`
    return uri
}