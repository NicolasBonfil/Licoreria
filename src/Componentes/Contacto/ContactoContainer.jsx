import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../service/firebase/config"
import { ContactoDetail } from "./ContactoDetail"


export const ContactoContainer = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    })

    const manejarCambio = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value
        })
    }

    const manejarContacto = (e) => {
        e.preventDefault()

        let fecha = new Date()

        addDoc(collection(db, "mensajes"), {
            nombre: formData.nombre,
            telefono: formData.telefono,
            email: formData.email,
            mensaje: formData.mensaje,
            fecha: fecha
        })

        setFormData({
            nombre: "",
            email: "",
            telefono: "",
            mensaje: ""
        })
    }

    return (
        <ContactoDetail formData = {formData} manejarContacto = {manejarContacto} manejarCambio = {manejarCambio}/>
    )
}
