import React, { Component } from 'react';
import NavBar from './NavBar';
import './Layout.css';

export default class Layout extends Component {
    
    render () {
        
        return (
            <div>
                <NavBar currentUser={this.props.currentUser} />
                <main className="container">
                    { this.props.children }
                </main>
            </div>
        )
    }
}
