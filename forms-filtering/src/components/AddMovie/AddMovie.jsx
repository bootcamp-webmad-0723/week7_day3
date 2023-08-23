import { useState } from "react"

const AddMovie = ({ addNewMovie }) => {

    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [IMDBRating, setIMDBRating] = useState(5)
    const [hasOscars, setHasOscars] = useState(false)

    const handleTitleInput = e => setTitle(e.currentTarget.value)
    const handleDirectorInput = e => setDirector(e.currentTarget.value)
    const handleRatingInput = e => setIMDBRating(e.currentTarget.value)
    const handleOscarsInput = e => setHasOscars(e.currentTarget.checked)

    const handleNewMovieSubmit = e => {
        e.preventDefault()
        const newMovie = { title, director, IMDBRating, hasOscars }
        addNewMovie(newMovie)

        resetForm()
    }

    const resetForm = () => {
        setTitle('')
        setDirector('')
        setIMDBRating(5)
        setHasOscars(false)
    }

    return (
        <div className="AddMovie">
            <form onSubmit={handleNewMovieSubmit}>
                Título: <input type="text" value={title} onChange={handleTitleInput} />
                <br />
                Director/a: <input type="text" value={director} onChange={handleDirectorInput} />
                <br />
                Puntuación: <input type="number" value={IMDBRating} onChange={handleRatingInput} />
                <br />
                Ganó Oscar?: <input type="checkbox" checked={hasOscars} onChange={handleOscarsInput} />
                <br />
                <input type="submit" value={'Crear película'} />
            </form>
        </div>

    )
}

export default AddMovie