import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebase/config";
import { createContext, useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const restarStock = (id, stock, cantidad) => {
        if(stock > 0){
            const productoRef = doc(db, "productos", id)

            updateDoc(productoRef, {
                stock: stock - cantidad,
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    const agregarAlCarrito = (producto, cantidad) => {
        restarStock(producto.id, producto.stock, cantidad)
        
        if(carrito.find(item => item.id === producto.id)){
            const buscado = carrito.find(item => item.id === producto.id)
            buscado.cantidad += cantidad
            buscado.stock -= cantidad
            setCarrito([...carrito])
        }else{
            const productoRef = doc(db, "productos", producto.id)
            getDoc(productoRef)
                .then((res) => {
                    const nuevoProducto = {id: res.id, ...res.data()}
                    setCarrito([...carrito, {...nuevoProducto, cantidad}])
                })
        }
    }

    const sumarStock = (id, cantidad, stock) => {
        const productoRef = doc(db, "productos", id)
            updateDoc(productoRef, {
                stock: stock + cantidad,
            })
            .catch(error => {
                console.log(error);
            })
    }

    const eliminarDelCarrito = (producto) => {
        const buscado = carrito.find(item => item.id === producto.id)
        sumarStock(buscado.id, buscado.cantidad, buscado.stock)
        setCarrito(carrito.filter(item => item.id != producto.id))
    }

    const iniciarCompra = () => {
		Swal.fire({
            title: "Compra Realizada",
            icon: "success",
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
                iniciarCompra,
                carrito,
                cantidadProductos,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}