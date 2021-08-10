import React from 'react';
import './App.css';
import requests from './request';
import Row from './Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Banner />
      <Row title = "NETFLIX ORIGINALS" isLargeRow fetchURL ={requests.fetchNetflixOriginals}/>
      <Row title = "Trending Now" fetchURL ={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchURL ={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchURL ={requests.fetchHorrorMovies}/>
      <Row title = "Comedy Movies" fetchURL ={requests.fetchRomanceMovies}/>
      <Row title = "Horror Movies" fetchURL ={requests.fetchComedyMovies}/>
      <Row title = "Romance Movies" fetchURL ={requests.fetchActionMovies}/>
      <Row title = "Documentaries" fetchURL ={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
