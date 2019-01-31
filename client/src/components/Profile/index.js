import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { userInfo } from 'os';


class Profile extends Component {
    state = {
        email: "", 
        favorites: [],
        name: "",
        loading: true
    }

    componentDidMount() {
        let { currentUser } = this.props
        axios.get(`/api/users/${currentUser._id}`)
            .then( res  => {
                this.setState({ user: res.data.payload, loading: false}, function () {
                    console.log(this.state)
                })
                debugger
            })
    }
    



    render () {
        let { currentUser } = this.props
        return (
            <div>
                <h1> Profile </h1>
                <Link to="/p" />
                <div className="row">
                    <p>Insert favorite breweries here</p>
                </div>
            </div>
        )
    }
}

export default Profile;