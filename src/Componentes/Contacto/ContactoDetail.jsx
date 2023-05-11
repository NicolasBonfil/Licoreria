import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons"

export const ContactoDetail = ({formData, manejarContacto, manejarCambio}) => {
    return (
        <div className="contactos">
            <h4 className="titulo">Contacto</h4>
            <div className="row">
                <section className="info-contacto col">
                    <div className="telefono">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <p>+54(11) 2463-0729</p>
                    </div>
                    <div className="instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                        <p>highmarket</p>
                    </div>
                    <div className="mail">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>high-marketplace@gmail.com</p>
                    </div>
                </section>
                <form className="container-formulario col" onSubmit={manejarContacto}>
                    <input type="text" name="nombre" placeholder="Nombre" onChange={manejarCambio} value={formData.nombre} required/>
                    <input type="email" name="email" placeholder="Email" onChange={manejarCambio} value={formData.email} required/>
                    <input type="number" name="telefono" placeholder="Telefono (opcional)" onChange={manejarCambio} value={formData.telefono}/>
                    <textarea id="message" name="mensaje" className="form-control-area" rows="7" placeholder="Mensaje" style={{height: 44}} onChange={manejarCambio} value={formData.mensaje}></textarea>
                    <div className="boton-enviar">
                        <button type="submit" className="btn btn-outline-dark d-flex justify-content-center">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
