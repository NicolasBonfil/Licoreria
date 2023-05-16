import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/config";

const SesionContext = createContext([])

export const useSesionContext = () => useContext(SesionContext)

export const SesionContextProvider = ({children}) => {

    const [log, setLog] = useState(false)

    useEffect(() => {
        const suscrito = onAuthStateChanged(auth, (usuarioActual) => {
            if(!usuarioActual){
                setLog(false)
            }else{
                setLog(true)
            }
        })
        return suscrito
    }, [])

    const cerrarSesion = async() => {
        await signOut(auth)
    }

    return (
        <SesionContext.Provider
            value = {{
                cerrarSesion,
                log,
            }}
        >
            {children}
        </SesionContext.Provider>
    )
}