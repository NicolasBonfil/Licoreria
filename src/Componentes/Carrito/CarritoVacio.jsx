import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export const CarritoVacio = ({ocultarCarrito}) => {
  return (
    <Offcanvas.Body className='d-flex flex-column align-items-center'>
        <p style={{fontSize: 16, marginBottom: 7}}>El carrito de compras está vacío</p>
        <Link to="/">
            <button className='btn btn-dark' onClick={ocultarCarrito}>Ir De Compras</button>
        </Link>
    </Offcanvas.Body>
  )
}
