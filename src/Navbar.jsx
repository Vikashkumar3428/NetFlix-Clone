import React from 'react';
import './navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <img src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`} style={{width:"18%",height:"4vh"}} />
            <div className="navbar__right d-flex">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn" type="submit">Search</button>
            </div>
        </div>
    )
}

export default Navbar
