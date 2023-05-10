import { useState } from "react"
import { Link } from "react-router-dom"
import { useSesionContext } from "../../Context/SesionContext.jsx"

export const LoginDetail = ({iniciarSesion, divRef}) => {

    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")

    const {iniciarSesionConGoogle} = useSesionContext()

    const manejarInicioSesion = (e) => {
        e.preventDefault()
        iniciarSesion(usuario, contraseña)
    }

    const manejarInicioSesionGoogle = (e) => {
        e.preventDefault()
        iniciarSesionConGoogle()
    }


    return (
        <div className="logInContainer">
            <h1>Iniciar Sesión</h1>
            <form className="logIn" onSubmit={manejarInicioSesion}>
                <div className="logInFields">
                    <input type="email" placeholder="Correo Electrónico" onChange={(e) => setUsuario(e.target.value)}/>
                    <input type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)}/>
                </div>

                <div className="logInError" ref={divRef}></div>

                <div className="logInButton">
                    <button>Iniciar Sesión</button>
                </div>
            </form>

            <div>
                <button style={{paddingTop:10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, margin: 10, border : "none", fontSize: 16}} onClick = {manejarInicioSesionGoogle}>
                    Iniciar Sesión con Google <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="" style={{width: 25, height: 25}}/>
                    
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


