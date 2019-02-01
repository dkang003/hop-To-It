import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



export class MapContainer extends Component {
    render() {
        return(
            <div style={{ height: '30vh', width: '30vh'}}>
                <Map google={this.props.google}
                zoom={5}
                initialCenter={{
                    lat: 34.0522, 
                    lng: -118.2437 
                }}
                onClick={this.onMapClicked}
                ></Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer)