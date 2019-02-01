import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD

class BrewIndex extends Component {
    state = {
        brewery: []
    }
    
    componentDidMount () {
        let { brewery } = this.state;
        debugger
        axios.get(`https://api.brewerydb.com/v2/locations/?key=e64cdf34c138b3ad00ce4a5de938d8f1&id=doVlXA`)
            .then(res  => {
                console.log( res )
                debugger
                this.setState({ brewery: res.data })
            })
    }

    render() {
        let { brewery, index } = this.state;
        debugger
=======
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

>>>>>>> master
        return(
            <div className="container">
                <h1>BREWERY INDEX</h1>
                <div className="map">
                    <h1>Insert map here</h1>
                </div>
                <div className="container">
<<<<<<< HEAD
                    <div className="brewery"> {brewery.name}
                    </div>
                    <div className="brewery">2 brewery
                    </div>
                    <div className="brewery">3 brewery
                    </div>
=======
                <ul>
                    { breweries.map((brewery, i) => {
                        // debugger
                    // return <li key={i}>{ brewery.name }</li>
                        // return <img key={i} src={brewery.images.large} />
                    return <li key={i}><Brewery key={brewery.id} brewery={ brewery } /></li>
                    })}
                </ul>
>>>>>>> master
                </div>
            </div>
        )
    }
}
export default BrewIndex;