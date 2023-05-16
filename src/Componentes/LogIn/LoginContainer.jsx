import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { LoginDetail } from "./LoginDetail"
import { auth } from "../../service/firebase/config"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavBarContainer } from "../Header/NavBarContainer"

export const LoginContainer = ({}) => {

    const [formData, setFormData] = useState({
        usuario: "",
        contraseña: ""
    })

    const manejarCambio = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const divRef = useRef(null)

    const navegar = useNavigate()

    const iniciarSesion = async (e) =>{
        e.preventDefault()

        divRef.current.innerHTML = ""

        await signInWithEmailAndPassword(auth, formData.usuario, formData.contraseña)
        .then(() => {
            navegar("/")
            setFormData({
                usuario: "",
                contraseña: "",
            })
        })
        .catch((error) => {
            if(error.code === "auth/user-not-found" || error.code === "auth/wrong-password"){
                divRef.current.innerHTML = "*Usuario o Contraseña Incorrectos"
            }
        })
    }

    const iniciarSesionConGoogle = async () => {
        const respuestaGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, respuestaGoogle)
        .finally(() => {
            navegar("/")
        })
    }

    return (
        <>
            <NavBarContainer/>
            <LoginDetail formData={formData} iniciarSesion = {iniciarSesion} iniciarSesionConGoogle = {iniciarSesionConGoogle} divRef = {divRef} manejarCambio = {manejarCambio}/>
        </>
    )
}
