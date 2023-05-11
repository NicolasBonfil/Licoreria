import Offcanvas from 'react-bootstrap/Offcanvas';
import { CarritoLleno } from './CarritoLleno';
import { CarritoVacio } from './CarritoVacio';

export const CartDetail = ({mostrar, ocultarCarrito, carrito, iniciarCompra, eliminarDelCarrito, total}) => {
	return (
		<div className='detalle-carrito'>
			<Offcanvas show={mostrar} onHide={ocultarCarrito} placement='end'>
					<Offcanvas.Header closeButton>
					<Offcanvas.Title>Carrito</Offcanvas.Title>
					</Offcanvas.Header>

					{
						carrito.length == 0?
							<CarritoVacio ocultarCarrito = {ocultarCarrito}/>
						:
							<CarritoLleno ocultarCarrito={ocultarCarrito} iniciarCompra = {iniciarCompra} eliminarDelCarrito = {eliminarDelCarrito} total = {total} carrito={carrito}/>

					}
				</Offcanvas>
		</div>
	)
}
