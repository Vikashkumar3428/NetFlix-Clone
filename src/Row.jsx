import axios from './axios';
import React, { useState, useEffect } from 'react';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay : 1,  
        }
    }
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchURL]);

    const handleClick = (movie) =>{ 
        console.log(trailerUrl);
        if(trailerUrl)
        {
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search); 
                // console.log(urlParams.get("v"));
                setTrailerUrl(urlParams.get("v"));
            }).catch((err) => { console.log(err);})
        }
    }

  
    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="row__posters">
                {movies.map( (movie) => 
                            <img className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} 
                            key = {movie.id} 
                            onClick={() => {handleClick(movie)}}
                            src={`${base_url}${props.isLargeRow ?movie.poster_path: movie.backdrop_path}`} alt={movie.title} />
                    )
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;
