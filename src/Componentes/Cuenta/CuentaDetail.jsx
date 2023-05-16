export const CuentaDetail = ({manejarSesion}) => {
  return (
    <div className="cuenta" style={{padding: 20}}>
      <button onClick={manejarSesion} className="btn btn-outline-danger">Cerrar Sesión</button>
    </div>
  )
}
