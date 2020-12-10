import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (props) => {
    return (
      <div id='googleMaps'>
        <Map 
          google={props.google}
          initialCenter={{
            "lat": props.location?.lat,
            "lng": props.location?.lng,
          }}
          center={{
            "lat": props.location?.lat,
            "lng": props.location?.lng,
          }}
        >
          <Marker 
            position={{
              "lat": props.location?.lat,
              "lng": props.location?.lng,
            }} />
        </Map>
      </div>
    )
  }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer)