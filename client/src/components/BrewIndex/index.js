import React, { Component } from 'react';
import axios from 'axios';
import Brewery from '../Brewery';
import Map from '../Map';
import './brewIndex.css';



export default class BrewIndex extends Component {
    state = {
        venues: [],
        currentUser: null
    }

    async componentDidMount() {
        let { currentUser } = this.props
        
        try {
            let { data: { response: { venues } }} = await axios.get('/test');
            let { data: { payload } } = await axios.get(`/api/users/${currentUser._id}`);
            this.setState({ 
                venues,
                user: payload, 
                favorites: payload.favorites, 
                loading: false 
            })
        } catch(err) {
            console.log(err);
        }
    }


    render() {
        let { venues } = this.state;
        let { currentUser } = this.props;

        return(
            <div className="grid container">
                <h1 className="brewIndexTitle">BREWERY INDEX</h1>
                <aside className="aspect-ratio">/</aside>
                <article>
                    <div className="grid absolute-fill main">
                        <div className="mapContainer aspect-ration">
                            <Map venues={venues} />
                        </div>
                        <div className="breweriesContainer aspect-ration">
                            <ul>
                                { venues.map((venue, i) => {
                                return <div key={i}>
                                        
                                        <Brewery 
                                            key={i}
                                            currentUser={ currentUser }
                                            venue={ venue }
                                            onClick={this.handleClick}
                                        />
                                    {/* <a href="/brewShow/${venue.id}">{brewery.name}</a> */}
                                    </div>

                                })}
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}