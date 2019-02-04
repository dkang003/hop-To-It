import React, { Component } from 'react';
import axios from 'axios';
import Brewery from '../Brewery';
import Map from '../Map';
import './brewIndex.css';
import { Link } from 'react-router-dom';


export default class BrewIndex extends Component {
    state = {
        breweries: [],
        currentUser: null
    }

    componentDidMount () {
        // let { breweries } = this.state;

        axios('/test')
        .then(res => { 
            
            this.setState({ breweries: res.data.response.venues })
        })
        .catch(err => {
            debugger
        })
        this.setState({ currentUser: this.props.currentUser})
    }   

    render() {
        let { breweries } = this.state;
        let { currentUser } = this.props;

        return(
            <div className="container">
                <h1>BREWERY INDEX</h1>

                <div className="main">
                    <div className="mapContainer">
                        <Map breweries={breweries} />
                    </div>
                    <div className="breweriesContainer">
                        <ul>
                            { breweries.map((brewery, i) => {
                            return <div key={i}>
                                    <Link 
                                        brewery={ brewery } 
                                        to={`/brewShow/${brewery.id}`}>
                                        {brewery.name}
                                    </Link>
                                    <Brewery 
                                        key={i}
                                        currentUser={ currentUser }
                                        brewery={ brewery }
                                        onClick={this.handleClick}
                                    />
                                {/* <a href="/brewShow/${brewery.id}">{brewery.name}</a> */}
                                </div>

                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}