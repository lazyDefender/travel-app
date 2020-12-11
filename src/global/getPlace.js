import axios from 'axios'
const cors =  
`https://cors-anywhere.herokuapp.com/`
const uri = `${cors}https://maps.googleapis.com/maps/api/place/findplacefromtext/json`

export const getPlace = async (name) => {
    const params = {
        input: name,
        inputtype: 'textquery',
        fields: 'photos,formatted_address,name,rating,opening_hours,geometry',
        key: process.env.REACT_APP_API_KEY,
    }
    const { data } = await axios.get(uri, {
        params,
    })
    return data
} 