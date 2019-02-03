import React, { Component } from 'react';

export default class Brewery extends Component {
    state = {
        currentUser:null
    }

    componentDidMount() {
        this.setState({ currentUser: this.props.currentUser})
    }
    
    onLike = (props, e) => {
        debugger
    }

    render() {
        let {brewery} = this.props;
        return (
            <div>
                <h1>{brewery.name}</h1>
                <button id={brewery.id} onClick={this.onLike}>Like ME</button>
            </div>
        )
    }
}
