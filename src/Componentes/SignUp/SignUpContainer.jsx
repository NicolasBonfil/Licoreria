import { useRef, useState } from "react"
import { SignUpDetail } from "./SignUpDetail"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../service/firebase/config"
import { NavBarContainer } from "../Header/NavBarContainer"
export const SignUpContainer = () => {
	const divRef = useRef(null)

    const [formData, setFormData] = useState({
        usuario:"",
        contraseña: "",
        confirmacionContraseña: ""
    }) 

    const manejarCambio = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

	const navegar = useNavigate()

    const registrarse = async (e) => {
        e.preventDefault()
        divRef.current.innerHTML = ""

        if(formData.contraseña !== formData.confirmacionContraseña){
            divRef.current.innerHTML = "*Las contraseñas no coinciden"
            return
        }
        
        await createUserWithEmailAndPassword(auth, formData.usuario, formData.contraseña)
        .then(() => {
			navegar("/access")
            setFormData({
                usuario:"",
                contraseña: "",
                confirmacionContraseña: ""
            })
        })
        .catch((error) => {
            if(error.code === "auth/email-already-in-use"){
                divRef.current.innerHTML = "*Ya existe una cuenta con este usuario"
            }else if (error.code == "auth/weak-password"){
                divRef.current.innerHTML = "*La contraseña debe tener 6 caracteres como mínimo"
            }else{
                divRef.current.innerHTML = "*Usuario Invalido"
            }
        })
	}

	return (
        <>
            <NavBarContainer/>
		    <SignUpDetail divRef = {divRef} formData = {formData} registrarse={registrarse} manejarCambio={manejarCambio}/>
        </>
	)
}