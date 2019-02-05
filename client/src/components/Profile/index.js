import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Profile.css'


class Profile extends Component {
    state = {
        favorites: [],
        allBreweries:  [],
        loading: true
    }

    async componentDidMount() {
        let { currentUser } = this.props
        
        // Ping Foursquare API to retrieve allBreweries info
        await axios.get('/test')
<<<<<<< HEAD
        .then(res => {
            // debugger
            this.setState({ allBreweries: res.data.response.venues })
        }).catch(err => {
            debugger
        })

        await axios.get(`/api/users/${currentUser._id}`)
        .then(({ data })  => {
            this.setState({ user: data.payload, favorites: data.payload.favorites, loading: false})
            // debugger
        }).catch(err => {
            debugger
        })

        // debugger
=======
            .then(res => {
                this.setState({ allBreweries: res.data.response.venues })
            }).catch(err => {
                debugger
            })

        // Ping our API to retrieve currentUser info
        await axios.get(`/api/users/${currentUser._id}`)
            .then(({ data }) => {
                this.setState({ user: data.payload, favorites: data.payload.favorites, loading: false })
            }).catch(err => {
                debugger
            })
>>>>>>> 4da88ae3151f9ed924f4db32ef4b08bbb0f7b43a
    }

    render() {
        let { user, loading, favorites, allBreweries } = this.state;
<<<<<<< HEAD
        // favorites = "all of the users fav breweries by their brewId"
        // allBreweries = "all of the breweries in the API"
        // debugger
        // iterate through favorites
        var filteredBrewery = [];
        for (var i = 0; i < favorites.length; i++) {
            var id = favorites[i];
            // for each id in favorites, find the object in allBreweries that has a matching id
            allBreweries.filter((element) => {
                if (element.id === id) {
                    // debugger
                    // save that object in a variable array to store them for use in the render
                    filteredBrewery.push(element)
                }
            })
            // debugger
        }
        
        debugger
        // iterate through filteredBrewery array and display each 
        if (loading) return <div></div>
        return (
            <div>
                <h1> { user.name } Profile </h1>
                <h3> { user.email } </h3>
                <Link to="/edit">Edit Profile </Link>
                <div className="row">
                    <ul>
                    {filteredBrewery.map((eachBrewery) => {
                        return <li>{eachBrewery.name}</li>
                    })}
                    </ul>
                </div>
=======

        // Loop through allBreweries to search and retrieve info using brewId in user's favorites
        var filteredBrewery = [];
        for (var i = 0; i < favorites.length; i++) {
            var id = favorites[i];
            // debugger
            // For each ID in favorites, find the object in allBreweries that has a matching ID
            allBreweries.filter((element) => {
                if (element.id === id) {
                    // If the element ID from the allBreweries array matches the Favorites ID, then save to
                    // our filteredBrewery array
                    filteredBrewery.push(element)
                    // debugger
                }
            })
        } 
         // Iterate through the filteredBrewery array and display info from each
    if (loading) return <div></div>
    return (
        <div className="faveBreweriesContainer">
            <h1> { user.name } Profile </h1>
            <h5> { user.email } </h5>
            <Link to="/edit">Edit Profile</Link>
            <div className="row">
                <ul>
                    {filteredBrewery.map(( eachBrewery, i ) => {
                        return<div key={i}>
                        <h5>{eachBrewery.name}</h5>
                        <p>{eachBrewery.location.address}</p>
                        <p>{eachBrewery.location.city},
                        {eachBrewery.location.state},
                        {eachBrewery.location.postalCode}</p>
                        </div>
                    })} 
                </ul>
>>>>>>> 4da88ae3151f9ed924f4db32ef4b08bbb0f7b43a
            </div>
        </div>
        )
    }
    
}

export default Profile;