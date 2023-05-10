import {collection, query, updateDoc, onSnapshot, doc} from "firebase/firestore"
import { db } from "../../service/firebase/config";
import { useState, useEffect } from "react";

export const Productos = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const q = query(collection(db, "productos"))
        const modificar = onSnapshot(q, function(querySnapShot){
            const docs = [];
            querySnapShot.forEach(function(doc){
                docs.push({id:doc.id, ...doc.data() })
            })
            setProductos(docs)
        })

        return () => {
            modificar()
        }
    }, [])

    const manejadorCompra = (id, stock) => {
        if(stock > 0){
            const productoRef = doc(db, "productos", id)

            updateDoc(productoRef, {
                stock: stock - 1,
            })

            .then(() => {
                console.log("El stock se actualizó");
            })
            .catch(error => {
                console.log(error);
            })
        }

    }

    return (
    <div>
        <h2>Productos</h2>
        {
            productos.map((item) => (
                <center key={item.id} style={{margin: 35}}>
                    <img src={item.foto} alt={item.name} style={{width:100, height: 100}}/>
                    <h1>{item.name}</h1>
                    <p>Precio: ${item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <button onClick={() => manejadorCompra(item.id, item.stock)}>Agregar al Carrito</button>
                </center>
            ))
        }
    </div>
  )
}
