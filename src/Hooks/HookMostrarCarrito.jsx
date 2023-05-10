import { useState } from "react";

export const useMostrarCarrito = () => {
    const [mostrar, setMostrar] = useState(false);

    const ocultarCarrito = () => setMostrar(false);
    const mostrarCarrito = () => setMostrar(true);

    return{mostrar, ocultarCarrito, mostrarCarrito}
}