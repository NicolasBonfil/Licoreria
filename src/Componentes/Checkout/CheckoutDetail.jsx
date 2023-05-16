import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { NavBarCheckout } from "../Header/NavBarCheckout"

export const CheckoutDetail = ({formData, manejarSubmit, manejarCambio, error, carrito, total, cantidadProductos}) => {

  return (
    <>
        <NavBarCheckout/>
        <div className="checkout">
            <h6 className="titulo">Checkout</h6>
            <div className="row">
                <form className="formulario-checkout col-8">
                    <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={manejarCambio}/>
                    <input type="text" placeholder="Apellido" name="apellido" value={formData.apellido} onChange={manejarCambio}/>
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={manejarCambio}/>
                    <input type="email" placeholder="Confirmar Email" name="emailConfirmacion" value={formData.emailConfirmacion} onChange={manejarCambio}/>
                    <input type="text" placeholder="Dirección" name="direccion" value={formData.direccion} onChange={manejarCambio}/>
                    <input type="number" placeholder="Telefono" name="telefono" value={formData.telefono} onChange={manejarCambio}/>
                    {error && <p style={{color: "red", fontSize: 15}}>{error}</p>}
                </form>

                <div className="checkout-contenido col-4">
                    <div className="cantidad-articulos">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <p>{cantidadProductos} artículos</p>
                    </div>
                    {
                        carrito.map((producto) => (
                            <div key={producto.id} className="checkout-item">
                                <img src={producto.foto} alt={producto.name} />
                                <div className="">
                                    <p className="nombre">{producto.name}</p>
                                    <p>CANT: {producto.cantidad}</p>
                                    <p>${producto.price.toLocaleString("es-AR")}</p>
                                </div>
                            </div>
                        ))
                    }

                    <div className="total">
                        <p>Total: ${total.toLocaleString("es-AR")}</p>
                    </div>
                    <div className="boton-enviar">
                        <button type="submit" className="btn btn-dark" onClick={manejarSubmit}>HACER PEDIDO Y PAGAR </button>
                    </div>
                </div>

        
            </div>
        </div>
    </>
  )
}
