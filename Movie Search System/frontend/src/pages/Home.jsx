import Moviecard from "../Components/Moviecard";
import { useState, useEffect } from "react";
import { getPopularmovies, searchMovies } from "../Service/Api";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularmovies = async () => {
            try {
                const popularmovie = await getPopularmovies();
                setMovies(popularmovie);
            } catch (err) {
                console.log(err);
                setError("Something went wrong while loading movies");
            } finally {
                setLoading(false);
            }
        };

        loadPopularmovies();
    }, []);


    // Search Handler
    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        try {
            setLoading(true);
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err) {
            console.log(err);
            setError("Search failed");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">
                    Search
                </button>
            </form>


            <div className="movies-grid">

                {movies.map(movie => (
                        <Moviecard
                            movie={movie}
                            key={movie.id}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;