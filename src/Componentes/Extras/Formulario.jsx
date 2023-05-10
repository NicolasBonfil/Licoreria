import { addDoc, collection } from "firebase/firestore"
import { db } from "../../service/firebase/config"
import { useState } from "react"


export const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleForm = (event) => {
        event.preventDefault()

        addDoc(collection(db, "usuarios"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
        })

        setNombre("")
        setApellido("")
        setTelefono("")
    }


    return (
        <form onSubmit={handleForm}>
            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required/>
            <br />
            <label htmlFor="">Apellido</label>
            <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} required/>
            <br />
            <label htmlFor="">Telefono</label>
            <input type="text" value={telefono} onChange={(event) => setTelefono(event.target.value)} required/>
            <br />

            <button type="submit">enviar</button>
        </form>
    )
}
