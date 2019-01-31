import React, { Component } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import httpClient from './utilities/httpClient';

class App extends Component {
    state = {
        currentUser: httpClient.getCurrentUser()
    }

    onAuthSuccess = () => {
        this.setState({ currentUser: httpClient.getCurrentUser() })
    }

    logout = () => {
        httpClient.logout();
        this.setState({ currentUser: null });
    }

    render () {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" render={(props) => {
                        return <Login {...props} onLoginSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/logout" render={() => {
                        return <Logout logOut={this.Logout} />
                    }} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Layout>
        )
    }
}

export default App;