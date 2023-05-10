import { useRef, useState } from "react"
import { SignUpDetail } from "./SignUpDetail"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../service/firebase/config"
export const SignUpContainer = () => {
	const divRef = useRef(null)

	const navegar = useNavigate()

    const registrarse = async (usuario, contraseña) => {
        divRef.current.innerHTML = ""
        await createUserWithEmailAndPassword(auth, usuario, contraseña)
        .then(() => {
			navegar("/access")
        })
        .catch((error) => {
            if(error.code === "auth/email-already-in-use"){
                divRef.current.innerHTML = "*Usuario Existente"
            }else if (error.code == "auth/weak-password"){
                divRef.current.innerHTML = "*La contraseña debe tener 6 caracteres como mínimo"
            }else{
                divRef.current.innerHTML = "*Usuario Invalido"
            }
        })
	}

    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")

    const manejarRegistro = (e) => {
        e.preventDefault()
        registrarse(usuario, contraseña)
    }



	return (
		<SignUpDetail divRef = {divRef} setUsuario={setUsuario} setContraseña={setContraseña} manejarRegistro={manejarRegistro}/>
	)
}