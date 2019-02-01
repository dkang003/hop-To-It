import React, { Component } from 'react';
import axios from 'axios';

class BrewIndex extends Component {
    state = {
        brewery: []
    }
    
    componentDidMount () {
        let { brewery } = this.state;
        debugger
        axios.get(`https://api.brewerydb.com/v2/locations/?key=e64cdf34c138b3ad00ce4a5de938d8f1&id=doVlXA`)
            .then(res  => {
                console.log( res )
                debugger
                this.setState({ brewery: res.data })
            })
    }

    render() {
        let { brewery, index } = this.state;
        debugger
        return(
            <div className="container">
                <h1>BREWERY INDEX</h1>
                <div className="map">
                    <h1>Insert map here</h1>
                </div>
                <div className="container">
                    <div className="brewery"> {brewery.name}
                    </div>
                    <div className="brewery">2 brewery
                    </div>
                    <div className="brewery">3 brewery
                    </div>
                </div>
            </div>
        )
    }
}
export default BrewIndex;