import { Link } from "react-router-dom"

export const LoginDetail = ({formData, iniciarSesion, divRef, iniciarSesionConGoogle, manejarCambio}) => {

    return (
        <div className="logIn-container">
            <h1>Iniciar Sesión</h1>
            <form className="logIn" onSubmit={iniciarSesion}>
                <div className="campos-logIn">
                    <input type="email" placeholder="Correo Electrónico" name="usuario" value={formData.usuario} onChange={manejarCambio}/>
                    <input type="password" placeholder="Contraseña" name="contraseña" value={formData.contraseña} onChange={manejarCambio}/>
                </div>

                <div className="logIn-error" ref={divRef}></div>

                <div className="logIn-boton">
                    <button>Iniciar Sesión</button>
                </div>
            </form>

            <div>
                <button style={{paddingTop:10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, margin: 10, border : "none", fontSize: 16}} onClick = {iniciarSesionConGoogle}>
                    Continuar con Google <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="" style={{width: 25, height: 25}}/>
                </button>
            </div>

            <div className="" style={{display: "flex", alignItems: "center", columnGap: 5, fontSize: 12, marginTop: 5}}>
                <p style={{fontSize: 14}}>¿No tenés cuenta aún?</p>
                <Link to = "/signup">
                    <b>Crear Cuenta</b>
                </Link>
            </div>
        </div>
    )
}


