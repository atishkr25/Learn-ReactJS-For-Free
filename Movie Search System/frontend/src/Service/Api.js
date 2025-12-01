const API_KEY = "f2bdbcf18d401d5159025a5d9978c397";
const URL = "https://api.themoviedb.org/3"

export const getPopularmovies = async () => {
    const response = await fetch(`${URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
export const searchMovies = async (query) => {
    const response = await fetch(`${URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}

