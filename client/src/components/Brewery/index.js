import React, { Component } from 'react';
// import axios from 'axios';

export default class Brewery extends Component {
    state = {
        currentUser:null
    }

    componentDidMount() {
        let { currentUser } = this.props;
        this.setState({ currentUser })
    }
    
    handleSubmit = (e) => {
        // let { brewery, currentUser } = this.props
        fetch('/api/breweries/')
        .then(res => {
            let brewery = res.data;
            debugger
            console.log(brewery);
            
        //     debugger
        //     let brewId = res.data.brewery;
        //     console.log(brewId)
        })
        
    };

    render() {
        let {brewery} = this.props;
        return (
            <div>
                <h1>{brewery.name}</h1>
                <form onSubmit={this.handleSubmit}>

                <input
                    type="submit"
                    name="id"
                    placeholder="Like Me"
                    value={brewery.id}
                    />
                </form>
                {/* <button id={brewery.id} onClick={this.onLike}>Like ME</button> */}
            </div>
        )
    }
}
