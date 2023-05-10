import { CartWidget } from "../Carrito/CartWidget"
import logo from "../../imagenes/logo.png"
import { Link } from "react-router-dom"
import { LogInWidget } from "../LogIn/LogInWidget"
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavBar = ({mostrar, menuRef, setMostrar}) => {
    return(
        <div className="navbar">
            <div className='logo'>
                <Link to= "/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="menu-hamburguesa">
                <FontAwesomeIcon icon={faBars} onClick={() => setMostrar(true)}/>
            </div>

            <ul className = {`navegador ${mostrar? "activo": ""}`} ref={menuRef}>
                <FontAwesomeIcon icon={faXmark} onClick={() => setMostrar(false)}/>
                <li className="nav-item">
                    <Link to = "/" onClick={() => setMostrar(false)}>
                        Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/categoria/cervezas" onClick={() => setMostrar(false)}>
                        Cervezas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/categoria/vinos" onClick={() => setMostrar(false)}>
                        Vinos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/categoria/whisky" onClick={() => setMostrar(false)}>
                        Whisky
                    </Link>
                </li>

            </ul>
            <div className='utilities'>
                <LogInWidget/>
                <CartWidget/>
            </div>
        </div>
    )
}