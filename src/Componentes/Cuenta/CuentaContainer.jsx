import { useNavigate } from 'react-router-dom'
import { CuentaDetail } from './CuentaDetail'
import { useSesionContext } from '../../Context/SesionContext'
import { NavBarContainer } from '../Header/NavBarContainer'

export const CuentaContainer = () => {
	const {cerrarSesion} = useSesionContext()
  	const navegar = useNavigate()

	const manejarSesion = () => {
		cerrarSesion()
		navegar("/")
	}
	return (
		<>
			<NavBarContainer/>
			<CuentaDetail manejarSesion={manejarSesion}/>
		</>
	)
}
