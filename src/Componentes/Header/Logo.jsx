import logo from "../../imagenes/logo.png"
import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <div className='logo'>
        <Link to= "/">
            <img src={logo} alt="logo" />
        </Link>
    </div>
  )
}
