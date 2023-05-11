import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Offcanvas from 'react-bootstrap/Offcanvas';

export const CarritoLleno = ({ocultarCarrito, iniciarCompra, eliminarDelCarrito, total, carrito}) => {
    console.log(carrito);
  return (
    <Offcanvas.Body className='d-flex flex-column p-0'>
        <div className='cart'>
            {
                carrito.map(producto => 
                    <div className='cart-item' key={producto.id}>
                        <img src={producto.foto} alt={producto.nombre}/>
                        <h1 className='item-name'>{producto.name}</h1>
                        <p className='precio'>${producto.price.toLocaleString("es-AR")}</p>
                        <p style={{fontSize:16, fontWeight:400}}>Cantidad: {producto.cantidad}</p>
                        <FontAwesomeIcon onClick={() => eliminarDelCarrito(producto)} icon={faTrash} />
                    </div>
                )
            }
        </div>

        <div className="cart-total">
            <h4>Total: ${total.toLocaleString("es-AR")}</h4>
        </div>

        <div className='botones'>
            <button className='btn btn-outline-dark' onClick={() => {iniciarCompra(); ocultarCarrito()}}>INICIAR COMPRA</button>
            <Link to={"/"}>
                <button className='btn' onClick={ocultarCarrito}>Ver Más Productos</button>
            </Link>
        </div>
    </Offcanvas.Body>
  )
}
