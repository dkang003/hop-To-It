import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Brewery from '../Brewery';
import './Profile.css'




class Profile extends Component {
    state = {
        // email: "", 
        favorites: [],
        breweries: [],
        // name: "",
        loading: true
    }

    async componentDidMount() {
        let { currentUser, breweries } = this.props

        await axios.get('/test')
        .then(res => {
            debugger
            this.setState({ breweries: res.data.response.venues })
        }).catch(err => {
            debugger
        })

        await axios.get(`/api/users/${currentUser._id}`)
        .then(({ data })  => {
            this.setState({ user: data.payload, favorites: data.payload.favorites, loading: false})
            console.log(this.state.favorites)            
            debugger
        }).catch(err => {
            debugger
        })

        debugger
    }

    // getFaveBreweries(brewId) {
    //     return User.favorites

    // }
    
    render () {
        let { user, loading, favorites, breweries } = this.state;
        console.log(favorites)
        console.log(breweries)
        debugger

        // const faveBreweries = breweries.filter( result => !user.favorites.includes(result.brewId) );
        // console.log(user)
        // console.log(faveBreweries)
        // debugger
        // user.favorites is the array of users favorite breweries by mongo id
        if (loading) return <div></div>
        return (
            <div className="profileWrap">
                <div className="profileHeader">
                    <h1> { user.name }'s Profile </h1>
                    <h5> { user.email }  |  <Link to="/edit">Edit Profile </Link> </h5>
                </div>
                {/* <Link to="/edit">Edit Profile </Link> */}
                <div className="faveBreweriesContainer">
                        <ul>
                            { breweries.map((brewery, i) => {
                            return <div key={i}>
                                    <Link
                                        className="nav-link" 
                                        brewery={ brewery } 
                                        to={`/brewShow/${brewery.id}`}>
                                        {brewery.name}
                                    </Link>
                                    <Brewery 
                                        key={i}
                                        currentUser={ user }
                                        brewery={ brewery }
                                        onClick={this.handleClick}
                                    />
                                {/* <a href="/brewShow/${brewery.id}">{brewery.name}</a> */}
                                </div>

                            })}
                        </ul>
                    </div>
            </div>
        )
    }
}

export default Profile;