import Moviecard from "../Components/Moviecard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "The Terminal List", release_date: "2022", url: "" },
        { id: 2, title: "The Tomorrow War", release_date: "2021", url: "" },
        { id: 3, title: "Extraction", release_date: "2020", url: "" },

        { id: 4, title: "John Wick", release_date: "2014", url: "" }
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchQuery);
    }

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
                {movies.map((movie) => (

                   movie.title.toLowerCase().startsWith(searchQuery) && 
                    <Moviecard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
