import React from 'react';

export default ({ brewery }) => {
    // debugger
    return (
        <div>
            <h1>{brewery.name}</h1>
            <h2>{brewery.location.address} {brewery.location.city} {brewery.location.state}</h2>
            <p>Latitude: {brewery.location.lat}</p>
            <p>Longitude: {brewery.location.lng}</p>
        </div>
    )
}