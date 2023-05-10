import { ItemCount } from "./ItemCount";

export const ItemDetail = ({producto, añadir}) => {

	return (
		<div className="detalle-container">
			<div className="detalle">
				<div className="foto-detalle">
					<img src={producto.foto} alt={producto.nombre}/>
				</div>
				<div className="contenido-detalle">
						<h1 className="item-name">{producto.name}</h1>
						<p className="precio">${producto.price.toLocaleString("es-AR")}</p>
						{
							producto.stock?
									<div>
										<ItemCount inicial={1} stock={producto.stock} añadir ={añadir} producto={producto}/>
									</div>
							:
								<h2 style={{fontSize:17, fontWeight:400}}>Sin stock</h2>
						}
				</div>
			</div>
		</div>
	)
}
