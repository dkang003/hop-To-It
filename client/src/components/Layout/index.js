import React from 'react';
import Navbar from './Navbar';
import './Layout.css';

export default ({ children, currentUser }) => (
    <div>
        <Navbar currentUser={currentUser} />
        <main className="container">
            { children }
        </main>
    </div>
)