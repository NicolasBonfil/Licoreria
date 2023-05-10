import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase/config";
import { useCartContext } from "../../Context/CartContext"

import { ItemDetail } from "./ItemDetail"
import { Cargando } from "../Extras/Cargando"

export const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({})
	const [estaCargando, setEstaCargando] = useState(true)
	const {pid} = useParams()

	useEffect(() => {
		const nuevoDoc = doc(db, "productos", pid)

        getDoc(nuevoDoc)
			.then(res => {
				const nuevoProducto = {id: res.id, ...res.data()}
				setProducto(nuevoProducto)
			})
			.catch(error => console.log(error))
			.finally(() => setEstaCargando(false))
    }, [pid])

	const {agregarAlCarrito} = useCartContext()

	const navigate = useNavigate()

	const añadir = (cantidad, producto) =>{
		agregarAlCarrito(producto, cantidad)
		navigate("/")
	}
    
    return (
		estaCargando?
			<Cargando/>
		:
			<ItemDetail producto = {producto} añadir={añadir}/>

	)
}
