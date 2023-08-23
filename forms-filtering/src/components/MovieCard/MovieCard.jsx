const MovieCard = ({ _id, title, director, IMDBRating, deleteMovie, hasOscars }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p className={`rating ${IMDBRating > 8 ? 'green' : 'red'}`}>{IMDBRating} puntos </p>
            {
                hasOscars ? <p>🏆 ¡Enhorabuena por el Oscar! 🏆</p> : <p>💩 Ya te lo darán 💩</p>
            }
            <button onClick={() => deleteMovie(_id)}>Eliminar</button>
        </div>
    )
}

export default MovieCard