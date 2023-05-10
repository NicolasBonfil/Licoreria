import { useNavigate } from 'react-router-dom'
import { CuentaDetail } from './CuentaDetail'
import { useSesionContext } from '../../Context/SesionContext'

export const CuentaContainer = () => {
	const {cerrarSesion} = useSesionContext()
  	const navegar = useNavigate()

	const manejarSesion = () => {
		cerrarSesion()
		navegar("/")
	}
	return (
		<CuentaDetail manejarSesion={manejarSesion}/>
	)
}
