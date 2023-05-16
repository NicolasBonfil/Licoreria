import { Link } from "react-router-dom"
import { useContador } from "../../Hooks/HookContador"

export const ItemCount = ({inicial, stock, producto, añadir}) => {

    const {cantidad, incrementar, decrementar} = useContador(inicial, stock)

    return(
        <div className="item-count">
            <div className="contador">
                <button onClick={decrementar}>-</button>
                <p style={{marginLeft: 10, marginRight:10}}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>
            <div>
                <Link to="/">
                    <button className="btn btn-dark" onClick={() => añadir(cantidad, producto)}>AGREGAR AL CARRITO</button>    
                </Link>
            </div>
        </div>
    )
}