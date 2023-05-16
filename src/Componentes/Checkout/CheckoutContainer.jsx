import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../service/firebase/config"
import { CheckoutDetail } from "./CheckoutDetail"
import { useNavigate } from "react-router-dom"

export const CheckoutContainer = () => {
    const {finalizarCompra, carrito, total, cantidadProductos} = useCartContext()

    const navigate = useNavigate()

    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        direccion: "",
        emailConfirmacion: ""
    })

    const manejarCambio = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value
        })
    }

    const manejarSubmit = (e) => {
        e.preventDefault()
        if(!formData.nombre || !formData.apellido || !formData.telefono || !formData.email || !formData.emailConfirmacion || !formData.direccion){
            setError("*Por favor complete todos los campos")
            return
        }

        if(formData.email !== formData.emailConfirmacion){
            setError("*Los emails no coinciden")
            return
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.id,
                nombre: producto.name,
                cantidad: producto.cantidad
            })),
            total: total,
            nombre: formData.nombre,
            apellido: formData.apellido,
            telefono: formData.telefono,
            direccion: formData.direccion,
            email: formData.email
        }

        addDoc(collection(db, "ordenes"), orden)
        .then((docRef) =>{
            finalizarCompra(docRef.id)
            navigate("/")

        })
        .catch((error) => {
            console.error("*Error al crear la orden", error);
            setError("*Se produjo un error al crear la orden")
        })

        setFormData({
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            direccion: "",
            emailConfirmacion: ""
        })
    }
  return (
    
    <CheckoutDetail formData = {formData} carrito = {carrito} total = {total} cantidadProductos = {cantidadProductos} manejarSubmit = {manejarSubmit} manejarCambio = {manejarCambio} error = {error}/>
  )
}
