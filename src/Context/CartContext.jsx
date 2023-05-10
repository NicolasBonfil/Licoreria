import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebase/config";
import { createContext, useContext, useEffect, useState } from "react";

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
            setCantidadProductos(cantidadProductos + cantidad)
            setTotal(total + (producto.price * cantidad))
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

    // const finalizarCompra = (carrito) => {
	// 	console.log(carrito);

    //     carrito.forEach(item =>{
    //         const productoRef = doc(db, "productos", item.id)
    
    //         getDoc(productoRef)
    //             .then(res => {
    //                 const producto = ({...res.data()})
    //                 console.log(producto.pepe);
    //                 // updateDoc(res, {
    //                 //     pepe: producto.pepe - producto.stock,
    //                 // })
    //             })
    //             .finally(res => {
    //                 const producto = {...res.data()}
    //                 updateDoc(productoRef, {
    //                     stock: producto.pepe,
    //                 })
    //             })
    //     })
	// }

    const [cantidadProductos, setCantidadProductos] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalProductos = 0
        let totalPrecio = 0
        carrito.forEach(producto => {
            totalProductos += producto.cantidad
            totalPrecio += (producto.cantidad * producto.price)
        })
        setCantidadProductos(totalProductos)
        setTotal(totalPrecio)
    }, [carrito])

    return(
        <CartContext.Provider
            value={{
                agregarAlCarrito,
                eliminarDelCarrito,
                // finalizarCompra,
                carrito,
                cantidadProductos,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}