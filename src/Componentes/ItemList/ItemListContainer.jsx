import { ItemList } from "./ItemList"
import { Cargando } from "../Extras/Cargando"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {collection, query, onSnapshot, where} from "firebase/firestore"
import { db } from "../../service/firebase/config";

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [estaCargando, setEstaCargando] = useState(true)

    const {cid} = useParams()

    useEffect(() => {
        const q = cid ? query(collection(db, "productos"), where("categoria", "==", cid)) : collection(db, "productos")
        const modificar = onSnapshot(q, function(querySnapShot){
            const docs = [];
            querySnapShot.forEach(function(doc){
                docs.push({ id:doc.id, ...doc.data() })
                setProductos(docs)
                setEstaCargando(false)
            })
        })

        return () => {
            modificar()
        }
    }, [cid])
    

    return (
        estaCargando?
            <Cargando/>
        :
            <ItemList productos = {productos}/>
    )
}