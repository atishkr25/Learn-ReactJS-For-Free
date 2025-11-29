import Moviecard from "../Components/Moviecard"

function Home() {
    const movies = [
        { id: 1, title: "The Terminal List", release_date: "2022", url: "https://m.media-amazon.com/images/M/MV5BNjgwNzE0NDItN2IyNy00YTM1LWIzM2QtMWU2YjI2NzQ0Y2Q2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" },
        { id: 2, title: "The Tomorrow War", release_date: "2021", url: "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZDM1DLCD._V1_.jpg" },
        { id: 3, title: "Extraction", release_date: "2020", url: "https://m.media-amazon.com/images/M/MV5BMDJiNzUwZGItYTEyYy00YjFhLWIzNGEtYOWI1ZTkiITc3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
        { id: 4, title: "John Wick", release_date: "2014", url: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg" }
    ]


    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <Moviecard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
