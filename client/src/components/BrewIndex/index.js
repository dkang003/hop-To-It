import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
// import Brewery from '../Brewery';
import Map from '../Map';
import './brewIndex.css';
import { Link } from 'react-router-dom';
=======
import Brewery from '../Brewery';
import MapContainer from '../MapContainer';
import './brewIndex.css';
>>>>>>> ad3ad32142c7beed89c7a8873463ef38a6c3b3b9

export default class BrewIndex extends Component {
    state = {
        breweries: []
    }

    componentDidMount () {
        // let { breweries } = this.state;

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
<<<<<<< HEAD

                <div className="main">
                    <div className="mapContainer">
                        <Map breweries={breweries} />
=======
                <div className="main">
                    <div className="mapContainer">
                        <MapContainer breweries={breweries} />
>>>>>>> ad3ad32142c7beed89c7a8873463ef38a6c3b3b9
                    </div>
                    <div className="breweriesContainer">
                        <ul>
                            { breweries.map((brewery, i) => {
<<<<<<< HEAD
                            return <div key={i}>
                                {/* <li key={i}><Brewery key={brewery.id} brewery={ brewery } /></li> */}
                                <Link brewery={ brewery } to={`/brewShow/${brewery.id}`}>{brewery.name}</Link>
                                {/* <a href="/brewShow/${brewery.id}">{brewery.name}</a> */}
                                </div>

=======
                            return <li key={i}><Brewery key={brewery.id} brewery={ brewery } /></li>
>>>>>>> ad3ad32142c7beed89c7a8873463ef38a6c3b3b9
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}