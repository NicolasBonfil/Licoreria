import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartDetail } from './CartDetail';
import { useCartContext } from '../../Context/CartContext';
import { useMostrarCarrito } from '../../Hooks/HookMostrarCarrito';

export const CartContainer = () => {

    const {mostrar, ocultarCarrito, mostrarCarrito} = useMostrarCarrito()

	const {carrito} = useCartContext()


	const {eliminarDelCarrito, cantidadProductos, total, iniciarCompra} = useCartContext()


    return (
      <div>
          	<>
				<div className='carrito' id='carrito'>
					<FontAwesomeIcon icon={faBagShopping} onClick={mostrarCarrito}/>
					<div className='contador-productos'>
						<p>{cantidadProductos}</p>
					</div>
				</div>

				<CartDetail mostrar={mostrar} ocultarCarrito={ocultarCarrito} iniciarCompra = {iniciarCompra} carrito = {carrito} eliminarDelCarrito = {eliminarDelCarrito} total = {total}/>
			</>
      </div>
    )
}
