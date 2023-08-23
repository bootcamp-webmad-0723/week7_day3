import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "selected" : ""}>SObre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/proyectos" className={({ isActive }) => isActive ? "selected" : ""}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/vuelos/MAD/BER/11-12-2029" className={({ isActive }) => isActive ? "selected" : ""}>Params</NavLink>
                </li>
                <li>
                    <NavLink to="/resultados?prenda=short&temporada=verano" className={({ isActive }) => isActive ? "selected" : ""}>Strings</NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;