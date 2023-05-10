import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MenuHamburgesa = () => {
  return (
    <div className="menu-hamburguesa">
        <FontAwesomeIcon icon={faBars} onClick={() => setMostrar(true)}/>
    </div>
  )
}
