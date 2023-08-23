import { useState } from "react"

const MoviesFilter = ({ filterMovies }) => {

    const [titleQuery, setTitleQuery] = useState('')

    const handleTitleChange = e => {
        setTitleQuery(e.target.value)
        filterMovies(e.target.value)
    }

    return (
        <div className="MoviesFilter">
            <h3>Buscar una película</h3>
            <input type="text" placeholder="Título..." value={titleQuery} onChange={handleTitleChange} />
        </div>
    )
}

export default MoviesFilter