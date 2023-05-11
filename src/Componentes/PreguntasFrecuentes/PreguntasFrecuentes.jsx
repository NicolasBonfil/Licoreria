import React from 'react'
import { Envios } from './Envios'
import { ComoComprar } from './ComoComprar'
import { Devoluciones } from './Devoluciones'
import { AtencionAlCliente } from './AtencionAlCliente'

export const PreguntasFrecuentes = () => {
  return (
    <div className='preguntas-frecuentes'>
        <h4 className='titulo'>Preguntas Frecuentes</h4>
        <ComoComprar/>
        <Envios/>
        <Devoluciones/>
        <AtencionAlCliente/>
    </div>
  )
}
