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
            <Layout currentUser={this.state.currentUser}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" render={(props) => {
                        return <Login {...props} onLoginSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/logout" render={() => {
                        return <Logout logout={this.logout} />
                    }} />
                    <Route exact path="/signup" render={(props) => {
                        return <Signup {...props} onSignupSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/profile" render={(props) => {
                        return <Profile currentUser={this.state.currentUser} />
                    }} />
                </Switch>
            </Layout>
        )
    }
}

export default App;