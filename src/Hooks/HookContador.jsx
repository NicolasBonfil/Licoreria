import { useState } from "react"

export const useContador = (inicial, maximo) => {

    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if(cantidad < maximo){
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return{cantidad, incrementar, decrementar}
}