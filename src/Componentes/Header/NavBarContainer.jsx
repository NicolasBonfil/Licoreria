import { useEffect, useRef, useState } from "react"
import { NavBar } from "./NavBar"

export const NavBarContainer = () => {
    const [mostrar, setMostrar] = useState(false)

    const menuRef = useRef()

    useEffect(() => {
        const manipulador = (e) => {
            if(!menuRef.current.contains(e.target)){
                setMostrar(false)
            }
        }

        document.addEventListener("mousedown", manipulador)

        return() =>{
            document.removeEventListener("mousedown", manipulador)
        }
    })
  return (
    <NavBar mostrar={mostrar} menuRef={menuRef} setMostrar={setMostrar}/>
  )
}
