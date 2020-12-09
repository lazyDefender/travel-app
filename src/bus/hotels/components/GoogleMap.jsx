import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375
      }
    };
  }

  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <div id='googleMaps'>
        <Map 
          google={this.props.google}
          initialCenter={{
            "lat": 18.6623694,
            "lng": -68.3961698
          }}
          center={{
            "lat": 18.6623694,
            "lng": -68.3961698
          }}
        >
          <Marker 
            position={{
              "lat": 18.6623694,
              "lng": -68.3961698
            }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB25VsvZ7Da66ZCNWB5hGj5uCe7JtVXAfI')
})(MapContainer)