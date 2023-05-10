import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Navegador = ({mostrar, menuRef, setMostrar}) => {
  return (
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
  )
}
