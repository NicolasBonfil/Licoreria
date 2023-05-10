import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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

    const iniciarSesionConGoogle = async () => {
        const respuestaGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, respuestaGoogle)
    }

    const cerrarSesion = async() => {
        await signOut(auth)
    }

    return (
        <SesionContext.Provider
            value = {{
                iniciarSesionConGoogle,
                cerrarSesion,
                log,
            }}
        >
            {children}
        </SesionContext.Provider>
    )
}