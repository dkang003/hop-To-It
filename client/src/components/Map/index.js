import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



export class MapContainer extends Component {
    state = {
        showingInfoWindow : false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked = ( props ) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        let { venues } = this.props;
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
            { venues.map((venue, i) => {
                const index = i + 1;
                return ( 
                <Marker
                onClick={this.onMarkerClick}
                key={i}
                label={index.toString()}
                venue={venue}
                position={ {lat: `${venue.location.lat}`, lng: `${venue.location.lng}`}} />
                )
            })}
               
                <InfoWindow
                marker = {this.state.activeMarker}
                visible = {this.state.showingInfoWindow}>
                <div className="infoWindow">
                    { this.state.selectedPlace.venue
                    ? (
                        <div>
                        <h5>{this.state.selectedPlace.venue.name}</h5>
                        <p>{this.state.selectedPlace.venue.location.address}</p>
                        <p>{this.state.selectedPlace.venue.location.city},
                        {this.state.selectedPlace.venue.location.state},
                        {this.state.selectedPlace.venue.location.postalCode}</p>
                        </div>
                    ) : (
                        <h3>Brewery Not Loaded</h3>
                    )}
                </div>    
                </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer)