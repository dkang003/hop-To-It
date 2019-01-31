import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Profile extends Component {
    state = {
        // email: "", 
        // favorites: [],
        // name: "",
        loading: true
    }

    componentDidMount() {
        let { currentUser } = this.props
        axios.get(`/api/users/${currentUser._id}`)
            .then(({ data })  => {
                this.setState({ user: data.payload, loading: false})
            })
    }
    



    render () {
        let { user, loading } = this.state;
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