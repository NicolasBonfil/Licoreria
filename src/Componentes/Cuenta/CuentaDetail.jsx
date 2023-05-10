import { useNavigate } from "react-router-dom"
import { useSesionContext } from "../../Context/SesionContext"

export const CuentaDetail = ({manejarSesion}) => {
  return (
    <div className="cuenta">
      <button onClick={manejarSesion}>Cerrar Sesión</button>
    </div>
  )
}
