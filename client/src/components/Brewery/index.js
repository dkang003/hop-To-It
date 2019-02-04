import React, { Component } from 'react';
import axios from 'axios';

export default class Brewery extends Component {
    state = {
        currentUser:null,
        brewery:null
    }

    componentDidMount() {
        let { currentUser, brewery } = this.props;
        this.setState({ currentUser, brewery })

    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        let { currentUser, brewery } = this.props;
        // debugger
        // show the individual brewery
        let res = await axios.get(`/api/breweries/${brewery.id}`)
        // debugger
        // check the returned brewery array from our api
        if (res.data.brewery.length === 0) {
            debugger
            // make a new brewery
            let newBrewery = await axios.post(`/api/breweries`, {brewId: `${brewery.id}`})
        } else {
            // let currentBrewery = 
            console.log("This brewery already exists in the DB")
            debugger
        }
        debugger
    };

    render() {
        let {brewery} = this.props;
        return (
            <div>
                <h1>{brewery.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="submit"
                        name="id"
                        placeholder="Like Me"
                        value={brewery.id}
                        />
                </form>
            </div>
        )
    }
}
