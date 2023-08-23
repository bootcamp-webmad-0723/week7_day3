import { useEffect } from "react";
import { Link } from "react-router-dom";

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";

function HomePage() {

    useEffect(() => {
        console.log('ESTO SE EJECUTA CUANDO EL COMPONENTE ESTÁ MONTADO')
        // LLAMADA A LA API
    }, [])

    return (
        <div>
            <h1>Home</h1>

            <Link to="/sobre-mi">Ver mi bio</Link>

            <hr />
            <img src={imgURL} alt="home gif" className="page-img" />
        </div>
    );
}

export default HomePage; 
