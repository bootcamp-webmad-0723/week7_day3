import { useParams } from "react-router-dom";

function ParamsExample() {

    const { origin, destination, date } = useParams()

    return (
        <>
            <h1>Los params!</h1>
            <hr />
            <p>Deberías mandar a la API para encontrar los vuelos de {origin} a {destination} el día {date}</p>
        </>
    );
}

export default ParamsExample;