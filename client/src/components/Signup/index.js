import React, { Component } from 'react';
import httpClient from '../../utilities/httpClient';
import Axios from 'axios';

export default class Signup extends Component {
    state = {
        email: "",
        password: "",
        name: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     let user = await httpClient.authenticate(this.state, "/api/users/authenticate");
    //     if (user) {
    //         this.props.onLoginSuccess();
    //         this.props.history.push('/')
    //     }
    //     Axios.post.('/api/users' )
    // }

    render() {
        let { email, password, name } = this.state;
        return (
            <div>
                <h1> Signup </h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit}>
                            <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                onChange={this.handleChange}
                                value={name}
                                />
                            <label>Email: </label>
                            <input 
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                onChange={this.handleChange}
                                value={email}
                                />
                            <label>Password: </label>
                            <input 
                                type="password"
                                name="password"
                                placeholder="Secret password here..."
                                onChange={this.handleChange}
                                value={password}
                                />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}