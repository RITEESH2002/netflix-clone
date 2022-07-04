const requests = {
    fetchTrending : `/trending/all/week?api_key=4951c85652fdf11c3ace40c5b61308ef`,
    fetchNetflixOriginals : `/discover/tv?api_key=4951c85652fdf11c3ace40c5b61308ef`,
    fetchTopRated : `/movie/top_rated?api_key=4951c85652fdf11c3ace40c5b61308ef&language=en-US&page=1`,
    fetchActionMovies : `/discover/movie?api_key=4951c85652fdf11c3ace40c5b61308ef&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=4951c85652fdf11c3ace40c5b61308ef&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=4951c85652fdf11c3ace40c5b61308ef&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=4951c85652fdf11c3ace40c5b61308ef&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=4951c85652fdf11c3ace40c5b61308ef&with_genres=99`,
    fetchUpcomingMovies : `/movie/upcoming?api_key=4951c85652fdf11c3ace40c5b61308ef&language=en-US&page=1`
}

export default requests;

