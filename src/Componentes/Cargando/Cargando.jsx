import Spinner from 'react-bootstrap/Spinner';
export const Cargando = () => {
    return (
        <div className="cargando">
            <Spinner animation="border" role="status" className='spinner'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
