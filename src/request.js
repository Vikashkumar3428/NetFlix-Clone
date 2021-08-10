const API_KEY = "e04931af86abd5df4cc82be42111d5b4";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals : `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumantaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-us`, 

}
export default requests;