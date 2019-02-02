import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



export class MapContainer extends Component {

    render() {
        let { breweries } = this.props;
        return(
            <div style={{ height: '30vh', width: '30vh'}}>
                <Map google={this.props.google}
                zoom={10}
                initialCenter={{
                    lat: 34.0522, 
                    lng: -118.2437 
                }}
                onClick={this.onMapClicked}
                >
            { breweries.map((brewery, i) => {
                return <Marker
                key={i}
                title={brewery.name}
                name={brewery.name}
                position={ {lat: `${brewery.location.lat}`, lng: `${brewery.location.lng}`}} />
            })}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer)