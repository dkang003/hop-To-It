import React, { Component } from 'react';
import axios from 'axios';
import Brewery from '../Brewery';

export default class BrewIndex extends Component {
    state = {
        breweries: []
    }

    componentDidMount () {
        let { breweries } = this.state;

        axios('/test')
        .then(res => { 
            debugger
            this.setState({ breweries: res.data.response.venues })
        })
        .catch(err => {
            debugger
        })

    }
    

    render() {
        let { breweries } = this.state;
        debugger

        return(
            <div className="container">
                <h1>BREWERY INDEX</h1>
                <div className="map">
                    <h1>Insert map here</h1>
                </div>
                <div className="container">
                <ul>
                    { breweries.map((brewery, i) => {
                        // debugger
                    // return <li key={i}>{ brewery.name }</li>
                        // return <img key={i} src={brewery.images.large} />
                    return <li key={i}><Brewery key={brewery.id} brewery={ brewery } /></li>
                    })}
                </ul>
                </div>
            </div>
        )
    }
}