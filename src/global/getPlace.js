import axios from 'axios'
const uri = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`
// input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyB25VsvZ7Da66ZCNWB5hGj5uCe7JtVXAfI`

export const getPlace = async (name) => {
    const params = {
        input: name,
        inputtype: 'textquery',
        fields: 'photos,formatted_address,name,rating,opening_hours,geometry',
        key: process.env.REACT_APP_API_KEY,
    }
    const res = await axios.get(uri, {
        params,
    })
    const json = await res.json()
    console.log(json)
} 