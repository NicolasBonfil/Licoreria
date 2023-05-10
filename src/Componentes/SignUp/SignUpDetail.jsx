import { Link } from "react-router-dom"

export const SignUpDetail = ({divRef, setUsuario, setContraseña, manejarRegistro}) => {

    return (
        <div className="signUpContainer">
            <h1>Crear Cuenta</h1>
            <form className="signUp" onSubmit={manejarRegistro}>
                <div className="signUpFields">
                    <input type="email" placeholder="Correo Electrónico" onChange={(e) => setUsuario(e.target.value)}/>
                    <input type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)}/>
                </div>

                <div className="signUpError" ref={divRef}></div>

                <div className="signUpButton">
                    <button>Crear Cuenta</button>
                </div>
            </form>
                <div className="" style={{display: "flex", alignItems: "center", columnGap: 5, fontSize: 12, marginTop: 5}}>
                    <p style={{fontSize: 14}}>¿Ya tenés cuenta?</p>
                    <Link to = "/access">
                        <b>Iniciá Sesión</b>
                    </Link>
                </div>
        </div>
    )
}
