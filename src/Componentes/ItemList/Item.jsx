import { Link } from "react-router-dom";

export const Item = ({producto}) => {
    return (
        <div className="item">
            <Link to = {`/detail/${producto.id}`}>
                <figure className="item-header">
                    <img src={producto.foto} alt={producto.name} />
                </figure>
                <div className="item-body">
                    <h1 className="item-name">{producto.name}</h1>
                    <p className="precio">${producto.price.toLocaleString("es-AR")}</p>
                </div>
            </Link>
        </div>
    )
}
