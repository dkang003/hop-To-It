import React, { Component } from 'react';
import axios from 'axios';
import Brewery from '../Brewery';
import MapContainer from '../MapContainer';
import './brewIndex.css';

export default class BrewIndex extends Component {
    state = {
        breweries: []
    }

    componentDidMount () {
        let { breweries } = this.state;

        axios('/test')
        .then(res => { 
            // debugger
            this.setState({ breweries: res.data.response.venues })
        })
        .catch(err => {
            // debugger
        })

    }
    

    render() {
        let { breweries } = this.state;
        // debugger

        return(
            <div>
                <h1>BREWERY INDEX</h1>
                <div className="main">
                    <div className="mapContainer">
                        <MapContainer breweries={breweries} />
                    </div>
                    <div className="breweriesContainer">
                        <ul>
                            { breweries.map((brewery, i) => {
                            return <li key={i}><Brewery key={brewery.id} brewery={ brewery } /></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}