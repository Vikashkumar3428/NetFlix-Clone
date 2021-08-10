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
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List  </button>
                </div>
                <h4 className="banner__description">{movie?.overview}</h4>
            </div>
        </header>
    )
}

export default Banner
