import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartDetail } from './CartDetail';
import { useCartContext } from '../../Context/CartContext';
import { useMostrarCarrito } from '../../Hooks/HookMostrarCarrito';
import { useSesionContext } from '../../Context/SesionContext';
import { useNavigate } from 'react-router-dom';

export const CartContainer = () => {

    const {mostrar, ocultarCarrito, mostrarCarrito} = useMostrarCarrito()

	const {eliminarDelCarrito, cantidadProductos, total, carrito} = useCartContext()
	
	const {log} = useSesionContext()

	const navigate = useNavigate()


    return (
      <div>
          	<>
				<div className='carrito' id='carrito'>
					<FontAwesomeIcon icon={faBagShopping} onClick={mostrarCarrito}/>
					<div className='contador-productos'>
						<p>{cantidadProductos}</p>
					</div>
				</div>

				<CartDetail mostrar={mostrar} ocultarCarrito={ocultarCarrito} carrito = {carrito} eliminarDelCarrito = {eliminarDelCarrito} total = {total} log ={log} navigate = {navigate}/>
			</>
      </div>
    )
}
