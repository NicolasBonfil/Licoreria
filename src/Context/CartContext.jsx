import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase/config";
import { createContext, useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto, cantidad) => {        
        if(carrito.find(item => item.id === producto.id)){
            const buscado = carrito.find(item => item.id === producto.id)
            buscado.cantidad += cantidad
            buscado.stock -= cantidad
            setCantidadProductos(carrito.reduce((total, producto) => total += producto.cantidad, 0))
            setTotal(carrito.reduce((total, producto) => total += (producto.price * producto.cantidad), 0))
        }else{
            const productoRef = doc(db, "productos", producto.id)
            getDoc(productoRef)
                .then((res) => {
                    const nuevoProducto = {id: res.id, ...res.data()}
                    setCarrito([...carrito, {...nuevoProducto, cantidad}])
                })
        }
    }

    const eliminarDelCarrito = (producto) => {
        const buscado = carrito.find(item => item.id === producto.id)
        setCarrito(carrito.filter(item => item.id !== producto.id))
    }

    const finalizarCompra = (id) => {
		Swal.fire({
            title: "Compra Realizada",
            icon: "success",
            text: `Tu numero de orden es: ${id}`
        })
        setCarrito([])
	}

    const [cantidadProductos, setCantidadProductos] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setCantidadProductos(carrito.reduce((total, producto) => total += producto.cantidad, 0))
        setTotal(carrito.reduce((total, producto) => total += (producto.price * producto.cantidad), 0))
    }, [carrito])

    return(
        <CartContext.Provider
            value={{
                agregarAlCarrito,
                eliminarDelCarrito,
                finalizarCompra,
                carrito,
                cantidadProductos,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}