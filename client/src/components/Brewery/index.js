import React, { Component } from 'react';
import axios from 'axios';
import './Brewery.css';
import { Link } from 'react-router-dom';


export default class Brewery extends Component {
    state = {
        currentUser:null,
        brewery:null
    }

    componentDidMount() {
        let { currentUser, venue } = this.props;
        this.setState({ currentUser, venue })

    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        let { currentUser, venue } = this.props;

        // show the individual venue
        try {
            let res = await axios.get(`/api/breweries/${venue.id}`)
            // check the returned venue array from our api
            if (res.data.brewery.length === 0) {
            // make a new venue
                let newBrewery = await axios.post(`/api/breweries`, {brewId: `${venue.id}`})
            } else {
                let likeBrewery = await axios.patch(`/api/breweries/${venue.id}`)
            }
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        let {venue} = this.props;

        return (
            <div>
                <h3>{venue.name}</h3>
                <Link 
                    className="nav-link"
                    venue={ venue } 
                    to={`/brewShow/${venue.id}`}>
                    {venue.name}
                </Link>
                <form onSubmit={this.handleSubmit} className=".button-small-black">
                    <input
                        type="submit"
                        name="id"
                        placeholder="Like Me"
                        value={venue.id}
    
                        />
                </form>
            </div>
        )
    }
}
