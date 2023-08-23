import { useSearchParams } from "react-router-dom";

function StringsExample() {

    const [searchParams, setSearchParams] = useSearchParams()

    const clothe = searchParams.get('prenda')
    const season = searchParams.get('temporada')

    return (
        <>
            <h1>Los query strings!</h1>
            <hr />
            <p>Deberías mandar a la API para encontrar las prendas {clothe} de temporada {season}</p>
        </>
    );
}

export default StringsExample;