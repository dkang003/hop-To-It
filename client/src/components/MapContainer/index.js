import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
    render() {
        // debugger
        let { breweries } = this.props;
        return(
            <Map google={this.props.google}
            zoom={10}
            initialCenter={
                {lat: 37.78, lng: -122.44}
            }
            style={
                { width: '100%', height: '100%', position:'relative' }
            }
            >

            { breweries.map((brewery,i) => {
                return <Marker 
                key={i}
                title={brewery.name} 
                name={brewery.name}
                position={ {lat: `${brewery.location.lat}`, lng: `${brewery.location.lng}` } }
                />
            }) }
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer)