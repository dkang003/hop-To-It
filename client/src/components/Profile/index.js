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
            debugger
            this.setState({ allBreweries: res.data.response.venues })
        }).catch(err => {
            debugger
        })

        // axios('/test')
        // .then(res => { 
            
        //     this.setState({ breweries: res.data.response.venues })
        // })
        // .catch(err => {
        //     debugger
        // })
        // this.setState({ currentUser: this.props.currentUser})

        await axios.get(`/api/users/${currentUser._id}`)
        .then(({ data })  => {
            this.setState({ user: data.payload, favorites: data.payload.favorites, loading: false})
            debugger
        }).catch(err => {
            debugger
        })

        debugger
    }




    render () {
        let { user, loading, favorites, allBreweries } = this.state;
        debugger
        // user.favorites is the array of users favorite breweries by mongo id
        if (loading) return <div></div>
        return (
            <div>
                <h1> { user.name } Profile </h1>
                <h3> { user.email } </h3>
                <Link to="/edit">Edit Profile </Link>
                <div className="row">
                    <ul>
                        <li>Brewery list starts here</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile;