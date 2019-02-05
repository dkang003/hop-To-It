import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Profile extends Component {
    state = {
        // email: "", 
        favorites: [],
        allBreweries: [],
        // name: "",
        loading: true
    }

    async componentDidMount() {
        let { currentUser } = this.props

        await axios.get('/test')
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
    }




    render () {
        let { user, loading, favorites, allBreweries } = this.state;
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
            </div>
        )
    }
}

export default Profile;