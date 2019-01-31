import React, { Component } from 'react';

class Profile extends Component {
    state = {
        email: "", 
        password: ""
    }

    render () {
        let { email, name } = this.state;
        return (
            <div>
                <h1> Profile </h1>
                <div className="row">
                    <p>Insert favorite breweries here</p>
                </div>
            </div>
        )
    }
}

export default Profile;