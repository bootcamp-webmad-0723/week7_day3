import { useState } from "react"
import { moviesArray } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"
import AddMovie from "../AddMovie/AddMovie"
import MoviesFilter from "../MoviesFilter/MoviesFilter"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesArray)
    const [moviesBackup, setMoviesBackup] = useState(moviesArray)               // para filtrar

    const removeMovie = movieId => {
        const updatedMovies = movies.filter(elm => elm._id != movieId)
        setMovies(updatedMovies)
        setMoviesBackup(updatedMovies)
    }

    const addNewMovie = newMovie => {
        const updatedMovies = [newMovie, ...movies]
        setMovies(updatedMovies)
        setMoviesBackup(updatedMovies)
    }

    const filterMovies = titleQuery => {
        const filteredMovies = moviesBackup.filter(elm => elm.title.includes(titleQuery))
        setMovies(filteredMovies)
    }

    return (
        <>
            <AddMovie addNewMovie={addNewMovie} />

            <MoviesFilter filterMovies={filterMovies} />

            {
                movies.map(movie => {
                    return (
                        <MovieCard key={movie._id} {...movie} deleteMovie={removeMovie} />
                    )
                })
            }
        </>
    )
}

export default MoviesList