import React, { useRef, useEffect, useState } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

const MapContainer = (props) => {
  const mapContainer = useRef(null)
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])
  const [visible, setVisible] = useState()
    return (
      <div id='googleMaps' ref={mapContainer}>
        <Map 
          style={{
            width: mapContainer?.current?.clientWidth
          }}
          onReady={() => {setVisible(true)}}
          visible={visible}
          className="map"
          resetBoundsOnResize={true}
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