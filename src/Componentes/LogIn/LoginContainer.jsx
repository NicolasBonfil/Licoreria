import { signInWithEmailAndPassword } from "firebase/auth"
import { LoginDetail } from "./LoginDetail"
import { auth } from "../../service/firebase/config"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const LoginContainer = () => {

    const divRef = useRef(null)

    const navegar = useNavigate()

    const iniciarSesion = async (usuario, contraseña) =>{
        divRef.current.innerHTML = ""
        await signInWithEmailAndPassword(auth, usuario, contraseña)
        .then(() => {
            navegar("/")
        })
        .catch((error) => {
            if(error.code === "auth/user-not-found" || error.code === "auth/wrong-password"){
                divRef.current.innerHTML = "*Usuario o Contraseña Incorrectos"
            }
        })

    }

    return (
        <LoginDetail iniciarSesion = {iniciarSesion} divRef = {divRef}/>
    )
}
