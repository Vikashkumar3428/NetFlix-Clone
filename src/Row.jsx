import axios from './axios';
import React, { useState, useEffect } from 'react';
import './row.css';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {

    const [movies,setMovies] = useState([]);
    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchURL]);
  
    return (
        <div className="row ">
            <h1>{props.title}</h1>
            <div className="row__posters">
                {movies.map( (movie) => 
                            <img className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} key = {movie.id} src={`${base_url}${props.isLargeRow ?movie.poster_path: movie.backdrop_path}`}alt={movie.title} />
                    )
                }
            </div>
        </div>
    )
}

export default Row
