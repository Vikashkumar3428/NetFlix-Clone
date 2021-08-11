import React, { useState, useEffect } from 'react';
import requests from './request';
import axios from './axios';
import './banner.css';

function Banner(props) {
    const [movie, setMovie]  = useState([]);
    useEffect(() => {
       async function giveData()
       {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
       }
       giveData();
    }, [])
    return (
        <header className="banner"
            style={{
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition : "center center"
            }}
        >
            <div className="banner__contents">
                <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button"><img alt="image" src="https://img.icons8.com/ios-glyphs/30/000000/play--v2.png" style={{width:"20px",marginRight:"3px"}}/>Play</button>
                    <button className="banner__button"><img alt="photo" src="https://img.icons8.com/material-outlined/30/000000/checked--v3.png" style={{width:"20px",marginRight:"3px"}}/>My List  </button>
                </div>
                <h6 className="banner__description">{movie?.overview}</h6>
            </div>
        </header>
    )
}

export default Banner
