import { Utilities } from "./Utilities"
import { Navegador } from "./Navegador"
import { MenuHamburgesa } from "./MenuHamburgesa"
import { Logo } from "./Logo"

export const NavBarDetail = ({mostrar, menuRef, setMostrar}) => {
    return(
        <div className="navbar">
            <Logo/>
            <MenuHamburgesa/>
            <Navegador mostrar={mostrar} menuRef={menuRef} setMostrar={setMostrar}/>
            <Utilities/>
        </div>
    )
}